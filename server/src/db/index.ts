
import { MongoClient } from 'mongodb'

let db:any = null

export function getDb():any{
    return db
}


export async function connectDb () {
    const url = 'mongodb://localhost:27017'
    const dbName = 'hacktues10'

	await MongoClient.connect(url)
		.then(async (client:any) => {
			console.log(`Great success - mongo connected to ${dbName} for LogsDb`)
			db = await client.db(dbName)
		})
		.catch((err:any) => {
			console.error('MongoDB connection error', err)
			throw err
		})
}
