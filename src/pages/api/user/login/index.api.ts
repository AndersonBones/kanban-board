
import { prisma } from "@/utils/prisma";
import { NextApiRequest, NextApiResponse } from "next";

import {compare, hash} from 'bcrypt'
import { AxiosError } from "axios";
import { v4 as uuidv4 } from 'uuid';

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    
    if(req.method != "POST"){
        return res.status(405).end()
    }


    const {email, password} = req.body

    
    try {

        const hasUser = await prisma.user.findFirst({
            where:{
                email
            }
        })


        if(!hasUser){
            throw new Error("user not found")

        }


        const match = await compare(password, String(hasUser.password))

        if(!match){
            throw new Error("unauthorized. incorrect email or password")
        }

        const date = new Date()
        date.setDate(date.getDate() + 5)
        
        await prisma.session.create({
            data:{
                userId:hasUser.id,
                session_token:uuidv4(),
                expires: date

            },

            include:{
                user:true
            }
        })

        
        return res.status(201).json({status:201, user:hasUser})

        
    } catch (error) {
        
        if (error instanceof Error) {
            return res.status(401).json({status:401, error:error.message})
          }
       
    }

    
    
}