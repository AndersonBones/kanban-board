import { prisma } from "@/utils/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { buildNextAuthOptions } from "../../auth/[...nextauth].api";


export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    
    if(req.method != "POST"){
        return res.status(405).end()
    }

    const {task_title, task_id} = req.body

    const session = await getServerSession(req, res, buildNextAuthOptions(req, res))

    if(!session){
        return res.status(401).json({message:"unauthorized", status:401})
    }

    
    try {
        
        const hasTask = await prisma.tasks.findFirst({
            where:{
                id:task_id
            }
        })

        if(hasTask){
            const updatedTask = await prisma.tasks.update({
                where:{
                    id:task_id,
                },

                data:{
                    title:task_title,
                }
            })

            return res.status(200).json({msg: "task updated successfully.", status:200, task:updatedTask})
        }

    

    } catch (error) {
        return res.json({status:401})
    }
    

    
}