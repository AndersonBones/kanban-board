
import { Auth, AuthAlternative, AuthContainer, AuthGoogle, AuthHero, AuthPageContainer, AuthTitle} from "../styles";

import googleIcon from '../../../assets/google.png'
import Image from 'next/image'

import {Logo} from "@/components/kanban/Logo";
import LoginForm from "@/components/AuthForms/login";
import {signIn, useSession} from 'next-auth/react'
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { getServerSession } from "next-auth";
import { buildNextAuthOptions } from "@/pages/api/auth/[...nextauth].api";

import { SessionProps, UserSession } from "@/types/kanban";



export default function Login({expires, user}:SessionProps) {


    const handleSignIn = ()=>{
        signIn("google")
      
    }

  
    // const session = useSession()
    // console.log(session)
    
    return (
        <AuthPageContainer>

            <AuthContainer>
                <AuthHero>
                    <Logo size={3}/>
                    
                    <h2>Welcome back!</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>

                </AuthHero>

                <Auth>
                    <AuthTitle>
                        <h1>Login</h1>
                    </AuthTitle>
                    
                    <LoginForm/>

                    <AuthAlternative></AuthAlternative>

                    <AuthGoogle onClick={handleSignIn}><Image src={googleIcon} width={30} alt="google" /> Login with Google</AuthGoogle>
                </Auth>
            </AuthContainer>





        </AuthPageContainer>

    )
}


export const getServerSideProps:GetServerSideProps = async (context:GetServerSidePropsContext)=>{

    

    const session = await getServerSession(context.req, context.res, buildNextAuthOptions(context.req, context.res)) as SessionProps

   
    if(session){
       
        
        return {
            redirect:{
                destination:`/home/${session.user.id}`,
                permanent:false,
            },

            props:{

              session
            }
        }
    }

    

    return {
        props:{
            session:null,
        },
    }
}