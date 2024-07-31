import { prisma } from "@/utils/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { buildNextAuthOptions } from "../auth/[...nextauth].api";


export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    
    if(req.method != "POST"){
        return res.status(405).end()
    }

    const session = await getServerSession(req, res, buildNextAuthOptions(req, res))

    if(!session){
        return res.status(401).json({message:"unauthorized", status:401})
    }
    

    const {task_id, board_id, task_title} = req.body
    
    const newTask = await prisma.tasks.create({
        data:{
            id:task_id,
            title:task_title,
            board_id
            
        }
    })


    return res.status(201).json({msg: "task created successfully.", task:newTask, status:201})
    

    
}