import express from 'express'
import {connectDb} from './db'
import complaintsRoute from './routers'
import cors from 'cors'

connectDb().then(()=>init())

function init() {
    const app = express();
    const port = 3001;
    app.use(cors())
    app.use(express.json());
    
    app.use('/complaints', complaintsRoute)
    

    app.listen(port, () => {
        console.log(`Alo? ` + port);
    })
}
