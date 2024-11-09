// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { serverAxios } from "@/lib/axios";
import PrismaAdapter from "@/lib/prisma-adapter";

import { prisma } from "@/utils/prisma";
import type { NextApiRequest, NextApiResponse, NextPageContext } from "next";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";

import GoogleProvider, { GoogleProfile } from "next-auth/providers/google";


export function buildNextAuthOptions(req: NextApiRequest | NextPageContext['req'], res: NextApiResponse | NextPageContext['res']): NextAuthOptions {
  return {
    adapter: PrismaAdapter(req, res),

    session: {
      strategy: "jwt",
      maxAge: 7 * 24 * 60 * 60, // 7 days
    },
    
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID ?? "",
        clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",

        authorization: {
          params: {
            prompt: "consent",
            access_type: "offline",
            response_type: "code",
            scope: "https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile"
          }
        },

        profile(profile: GoogleProfile) {
          return {
            id: profile.sub,
            image: profile.picture,
            email: profile.email,
            name: profile.name,


          }
        }
      }),

      Credentials({
        name: "Credentials",

        credentials: {
          email: {
            label: "E-mail",
            type: "email"
          },

          password: {
            label: "Password",
            type: "password"
          }

        },
        async authorize(credentials, req) {

          try {
            const response = await serverAxios.post('/user/login', {
              email: credentials?.email,
              password: credentials?.password
            })

            const { user } = response.data
            const userCredentials = { ...user, credentials }




            return user

          } catch (error) {
            return null
          }


        },


      })


    ],

    secret: process.env.NEXTAUTH_SECRET,

    pages: {
      error: "/auth/error"
    },

    callbacks: {



      async jwt({ account, token, user, session }) {

       
        if (user) {
          return {
            ...token,
            id: user.id
          }
        }

        


        return token

      },

      async session({ session, user, token, newSession }) {

        
        if(token){

    
          return {
            user:{
              id:token.id,
              name:session.user?.name,
              email:session.user?.email,
            },

            expires:session.expires
          }
        }

        return { ...session, user }

      },

      async signIn({ user, account, profile, credentials }) {
        const { email, image, name } = user


        if (!account) {

          return '/auth/login?error=permissions'
        }
        return true


      },




    }

  }
}



export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  return await NextAuth(req, res, buildNextAuthOptions(req, res))
}


