import { Router } from 'express'
import { getDb } from '../db'

import { catchRoute } from './catchRoute'

const router = Router()

router.post('/', catchRoute(complaintPost))
router.get('/by-institution/:id', catchRoute(complaintByInstitution))
router.get('/by-office/:id', catchRoute(complaintsByOffice))


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

async function complaintByInstitution(req:any,res:any){
  // @TODO
  // const complaints = await getDb().collection('complaints')
}

async function complaintsByOffice(req:any,res:any){
  // @TODO
  // const complaints
}

export default router