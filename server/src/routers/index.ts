import { Router } from 'express'
import { getDb } from '../db'

import { catchRoute } from './catchRoute'
import { ComplaintType, Complaint } from '../interfaces'
import { ObjectId } from 'mongodb'

const router = Router()

router.post('/', catchRoute(complaintPost))
router.get('/by-institution/:institutionId', catchRoute(institutionSummary))
router.get('/by-office/:officeId', catchRoute(complaintsByOffice))
router.get('/global-stats', catchRoute(globalStats))
router.get('/offices/:institutionId', catchRoute(officesByInstitution))

const average = (arr:number[])=>{
  return arr.reduce((a,b)=>a+b, 0)/arr.length
}

const diviationFromAverage = (arr:number[]) => {
  const av = average(arr)
  let distance = 0
  arr.forEach((n)=> distance += Math.abs(n-av))
  return distance
}


async function officesByInstitution(req:any,res:any){
  const offices = await getDb().collection('offices').find({}).toArray()
  return res.status(200).send({success:true,data:offices})

}
async function complaintPost(req: any, res: any) {
  const { time, user, complaints, officeId, serviceType, clerk, comment, media, institutionId} = req.body
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  if (!(time && user && complaints && officeId && serviceType && clerk && comment && media && institutionId))
    return res.status(400).send({ success: false, message: 'Bad request' })
  
  const expectedComplaints = ["speed" , "politeness", "precision", "tech", "accessability", "pricing"]
  Object.keys(complaints).forEach(c=>{
    if(!expectedComplaints.includes(c)) res.status(400).send({success:false, message: `not al cmoplaints filled ${expectedComplaints}`})
  })

  try{
    const newComplaint = {
      time: new Date(time),
      user,
      complaints,
      officeId,
      serviceType,
      clerk,
      comment,
      media,
      institutionId
    }
    getDb().collection('complaints').insertOne(newComplaint)

  }catch(e){
    throw Error(`${e}`)
  }
  res.status(200).send({ success: true, message: 'Saved' })

}

async function institutionSummary(req:any,res:any){
  const institutionId = parseInt(req.params.institutionId)
  if(!institutionId) {
    res.status(400).send({success:false, message:"institution id must be a number"})
    return
  }
  const complaints = await getDb().collection('complaints').find({institutionId}).sort({time:1}).toArray()
  const institution = await getDb().collection('institutions').findOne({_id: institutionId})
  let data:any = {
    historicalRating: {
        speed: [],
        politeness: [], 
        precision: [],
        tech: [],
        accessability: [],
        pricing: []
    },
    institutionId,
    institutionName: institution.name
  }
  complaints.forEach((c: Complaint) => 
    Object.keys(data.historicalRating).forEach((t)=>data.historicalRating[t].push(c.complaints[t as ComplaintType]))
  )
  // determines importance based on diviation from average
  data.mostRelevant =  Object.entries(data.historicalRating).reduce((a: any, b:any)=> 
     diviationFromAverage(a[1] as number[]) < diviationFromAverage(b[1] as number[]) ? a : b
  ,['',[]])[0]
  res.status(200).send({success:true, data})
}

async function complaintsByOffice(req:any,res:any){
  const officeId = parseInt(req.params.officeId)
  if(!officeId) {
    res.status(400).send({success:false, message:"office id must be a number"})
    return
  }
  const [complaints,office] = await Promise.all([
      getDb().collection('complaints').find({officeId}).sort({time:1}).toArray(),
      getDb().collection('offices').findOne({_id: officeId})
    ])

  if(!office) return res.status(404).send({success:false,message:'Office not found'})
  let data:any = {
    complaints:{
      speed: [],
      politeness: [], 
      precision: [],
      tech: [],
      accessability: [],
      pricing: []
    },
    comments: complaints.map((c:Complaint)=>c.comment),
    institutionId:office.institutionId,
    officeId,
    location: office.location,
    contacts: office.contacts
  }
  complaints.forEach((c:Complaint)=>{
    Object.keys(data.complaints).forEach(t=>{
      data.complaints[t as ComplaintType].push(c.complaints[t as ComplaintType])
    })
  })

  res.status(200).send({success:true, data})
}

async function globalStats(req:any,res:any) {
      const complaints:Complaint[] = await getDb().collection('complaints').find({}).sort({time:1}).toArray()
      const institutions = await getDb().collection('institutions').find({}).toArray()

      //calculate instutions average scores
      let averages = Object.fromEntries(institutions.map(( { _id }:any)=>[_id.toString(),[]]))
      let growths = Object.fromEntries(institutions.map(( { _id }:any)=>[_id.toString(),0]))
      let overallRating:any= {
        speed: [],
        politeness: [], 
        precision: [],
        tech: [],
        accessability: [],
        pricing: []
      }
      
      Object.values(complaints).map(( { institutionId, complaints })=>{
        averages[institutionId].push(average(Object.values(complaints)))
        Object.entries(complaints).forEach(([k,v])=>{
          overallRating[k].push(v)
        })
      })
  
      Object.entries(averages).forEach(([institutionId,numbers])=>{
        const avg = average(numbers)
        const fisrtHalfDistanceToAvg = average(numbers.slice(0,Math.floor(numbers.length/2)).map((a:number)=>avg-a)) | 0
        const secondHalfDistanceToAvg = average(numbers.slice(Math.floor(numbers.length/2), numbers.length).map((a:number)=>a-avg)) | 0
        growths[institutionId] = fisrtHalfDistanceToAvg+secondHalfDistanceToAvg
        averages[institutionId] = avg
      })
      let bestGrowing:any = Object.entries(growths).reduce((a,b)=>a[1]>b[1] ? a : b, ['',Number.MIN_SAFE_INTEGER] )
      
      bestGrowing  = {
        chartData: complaints.filter(({institutionId}:any)=> institutionId === parseInt(bestGrowing[0])).map(({complaints}:any)=>average(Object.values(complaints))),
        institutionId: bestGrowing[0],
        institution: institutions.find((({ _id }: any)=> _id ==bestGrowing[0]))
      }

      let topRated:any = Object.entries(averages).reduce((a,b)=>a[1]>b[1] ? a : b, ['',Number.MIN_SAFE_INTEGER] )
      topRated = {
        institution: institutions.find(({_id}:any)=>_id === parseInt(topRated[0])),
        rating: topRated[1]
      }
      let worstRated:any  = Object.entries(averages).reduce((a,b)=>a[1]<b[1] ? a : b, ['',Number.MAX_SAFE_INTEGER] )
      worstRated = {
        institution: institutions.find(({_id}:any)=>_id === parseInt(worstRated[0])),
        rating: worstRated[1]
      }
      const data = {
        topRated,
        worstRated,
        bestGrowing,
        totalComplaintsCount: complaints.length,
        overallRating
      }
      res.status(200).send({success:true,data})
}


export default router