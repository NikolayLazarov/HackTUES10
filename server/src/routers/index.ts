import { Router } from 'express'
import { getDb } from '../db'

import { catchRoute } from './catchRoute'
import { ComplaintType, Complaint } from '../interfaces'

const router = Router()

router.post('/', catchRoute(complaintPost))
router.get('/by-institution/:institutionId', catchRoute(institutionSummary))
router.get('/by-office/:officeId', catchRoute(complaintsByOffice))


async function complaintPost(req: any, res: any) {
  const { time, user, complaintType, institutionId, rating, officeId, serviceType, clerk, comment, media } = req.body
  try{
    const newComplaint = {
      time: new Date(time),
      user,
      complaintType,
      institutionId,
      rating,
      officeId,
      serviceType,
      clerk,
      comment,
      media

    }
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (!(time && user && complaintType && officeId && rating && institutionId && serviceType && clerk && comment && media))
      res.status(400).send({ success: false, message: 'Bad request' })
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
    averages: {
        "speed": 0,
        "politeness": 0,
        "precision": 0,
        "tech": 0,
        "accessability": 0,
        "pricing": 0
    },
    historicalRating: {
        "speed": [],
        "politeness": [], 
        "precision": [],
        "tech": [],
        "accessability": [],
        "pricing": []
    },
    institutionId,
    institututionName: "PLACEHOLDER"
  }
  complaints.forEach((c: Complaint) => {
    data.averages[c.type as ComplaintType] += c.rating
    data.historicalRating[c.type].push(c.rating)
  })

  Object.keys(data.averages).map((key)=>{
    if (data.historicalRating.length) data.averages[key] /= data.historicalRating.length
  })

  // determines importance of complaintType based on number of complaints
  data.mostRelevant =( Object.entries(data.historicalRating) as [string,number[]][]).reduce(
    (a:[string,number[]],b:[string,number[]]):any => a[1].length>b[1].length ? a : b ,
    ['',[]]
  )[0]
  res.status(200).send({success:true, data})
}

async function complaintsByOffice(req:any,res:any){
  const officeId = parseInt(req.params.officeId)
  if(!officeId) {
    res.status(400).send({success:false, message:"office id must be a number"})
    return
  }
  const complaints = await getDb().collection('complaints').find({officeId}).toArray()

  res.status(200).send({success:true, data: complaints})
}

export default router