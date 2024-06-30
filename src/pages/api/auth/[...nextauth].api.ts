// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse, NextPageContext } from "next";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";

import GoogleProvider, { GoogleProfile } from "next-auth/providers/google";


export function buildNextAuthOptions(req:NextApiRequest | NextPageContext['req'], res:NextApiResponse |  NextPageContext['res']):NextAuthOptions{
  return {
  
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID ?? "",
        clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",

        authorization:{
          params:{
            prompt: "consent",
            access_type: "offline",
            response_type: "code",
            scope:"https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile"
          }
        },

        // profile(profile:GoogleProfile){
        //   return {
        //     id:profile.sub,
        //     avatar_url:profile.picture,
        //     email:profile.email,
        //     username:profile.name,
        //     name:profile.name
  
        //   }
        // }        
      }),
    ],

    pages:{
      error:"/auth/error"
    },

    callbacks:{
      async signIn({user, account, profile, email, credentials}){
        if (!account?.scope?.includes("https://www.googleapis.com/auth/userinfo.profile")) { // not permission
          return '/register/connect-calendar?error=permissions'
        }

        return true // permission
      },
      async session({session}){
        

        const user = {
          username:session.user?.name ? session.user.name : null,
          image:session.user?.image ? session.user.image : null,
          email:session.user?.email ? session.user.email : null
        }
        
        return session
      },
    }
    
  }
} 



export default async function auth(req: NextApiRequest, res:NextApiResponse){
  return await NextAuth(req, res, buildNextAuthOptions(req, res))
}


