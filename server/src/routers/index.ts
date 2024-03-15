import { Router } from 'express'
import { getDb } from '../db'

import { catchRoute } from './catchRoute'
import { ComplaintType, Complaint } from '../interfaces'
import { ObjectId } from 'mongodb'

const router = Router()

router.post('/', catchRoute(complaintPost))
router.get('/by-institution/:institutionId', catchRoute(institutionSummary))
router.get('/by-office/:officeId', catchRoute(complaintsByOffice))

const average = (arr:number[])=>{
  return arr.reduce((a,b)=>a+b, 0)/arr.length
}

const diviationFromAverage = (arr:number[]) => {
  const av = average(arr)
  let distance = 0
  arr.forEach((n)=> distance += Math.abs(n-av))
  return distance
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
  const complaints = await getDb().collection('complaints').find({institutionId}).toArray()

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
    institututionName: "PLACEHOLDER"
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
  const complaints = await getDb().collection('complaints').find({officeId}).toArray()
  const office = await getDb().collection('offices').findOne({_id: officeId})
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

export default router