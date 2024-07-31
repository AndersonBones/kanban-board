import { BoardSchema, TaskSchema, UserSchema } from "@/types/kanban";
import { prisma } from "@/utils/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { buildNextAuthOptions } from "../../auth/[...nextauth].api";


export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    
    if(req.method != "GET"){
        return res.status(405).end()
    }


    const {user_id} = req.query

    const user = await prisma.user.findFirst({

        where:{
            id:String(user_id)
        },

        include:{
            boards:{
                include:{
                    tasks:true
                }
            }
        }
    })

    if(user == null){
        throw new Error("Unauthenticated")
    }
    return res.status(201).json({msg:"Authenticated", user, status:201})
    

    
    
}