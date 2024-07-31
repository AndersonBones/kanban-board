import { prisma } from "@/utils/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { buildNextAuthOptions } from "../../auth/[...nextauth].api";


export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    
    if(req.method != "DELETE"){
        return res.status(405).end()
    }

    const session = await getServerSession(req, res, buildNextAuthOptions(req, res))

    if(!session){
        return res.status(401).json({message:"unauthorized", status:401})
    }

    const {task_id} = req.body



    
    try {
        
        const hasTask = await prisma.tasks.findFirst({
            where:{
                id:task_id
            }
        })

        if(hasTask){
            const deletedTask = await prisma.tasks.delete({
                where:{
                    id:task_id,
                },

            })

            return res.status(200).json({msg: "task deleted successfully.", status:200, task:deletedTask})
        }

    

    } catch (error) {
        return res.json({status:401})
    }
    

    
}