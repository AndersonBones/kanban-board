
import { prisma } from "@/utils/prisma";
import { NextApiRequest, NextApiResponse } from "next";

import {compareSync, hash} from 'bcrypt'
import { AxiosError } from "axios";


export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    
    if(req.method != "POST"){
        return res.status(405).end()
    }


    const {name, email, password} = req.body

    
    try {

        const hasUser = await prisma.user.findFirst({
            where:{
                email
            }
        })


        if(hasUser){
            throw new Error("user already exists")
        }


        const hashedPassword = await hash(password, 10)

        const newUser = await prisma.user.create({
            data:{
                name,
                email,
                password:hashedPassword
            }
        })



        


        return res.status(201).json({status:201, user:newUser})
    } catch (error) {
        
        if (error instanceof Error) {
            return res.status(401).json({status:401, error:error.message})
          }
       
    }

    
    
}