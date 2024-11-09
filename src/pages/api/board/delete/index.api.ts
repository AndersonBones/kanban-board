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

    const {id} = req.body



    
    try {
        
        const deletedBoard = await prisma.board.delete({
            where:{
                id,
            },

        })


        await prisma.tasks.deleteMany({
            where:{
                board_id:id,
            },

        })


        return res.status(200).json({msg: "board deleted successfully.", status:200, board:deletedBoard})

    

    } catch (error) {
        return res.json({status:401})
    }
    
}
    