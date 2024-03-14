export function catchRoute(routeFunction: (request:any, response:any) => Promise<any> ):
 (request:any, response:any) => Promise<any> {
    return async (req:any, res:any) => {
        try{
            await routeFunction(req,res)
        }catch(e){
            console.log(e)
            res.status(500).send({success:false, message: "Internal server error"})
        }
    }
}