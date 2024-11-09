import { prisma } from "@/utils/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { buildNextAuthOptions } from "../../auth/[...nextauth].api";





export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    
    if(req.method != "POST"){
        return res.status(405).end()
    }


    const session = await getServerSession(req, res, buildNextAuthOptions(req, res))

    if(!session){
        return res.status(401).json({message:"unauthorized", status:401})
    }


    const {user_id, board_title, color} = req.body

    const newBoard = await prisma.board.create({
        data:{
            board_title,
            color,
            user_id,

        },

        include:{
            tasks:true
        }
    })

    
    return res.status(201).json({message: "board created successfully.", board: newBoard, status:201})
    

    
}