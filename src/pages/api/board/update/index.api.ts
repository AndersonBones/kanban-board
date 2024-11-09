import { prisma } from "@/utils/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { buildNextAuthOptions } from "../../auth/[...nextauth].api";


export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    
    if(req.method != "PUT"){
        return res.status(405).end()
    }

    const {id, board_title, color} = req.body

    const session = await getServerSession(req, res, buildNextAuthOptions(req, res))

    if(!session){
        return res.status(401).json({message:"unauthorized", status:401})
    }

    
    try {
        
        const updatedBoard = await prisma.board.update({
            where:{
                id,
            },

            data:{
                board_title,
                color
            }
        })

        return res.status(200).json({msg: "board updated successfully.", status:200, board:updatedBoard})
    

    } catch (error) {
        return res.json({status:401})
    }
    

    
}