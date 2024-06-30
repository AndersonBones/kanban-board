
import { Auth, AuthAlternative, AuthContainer, AuthGoogle, AuthHero, AuthPageContainer, AuthTitle} from "../styles";

import googleIcon from '../../../assets/google.png'
import Image from 'next/image'

import {Logo} from "@/components/logo";
import LoginForm from "@/components/authForms/login";
import {signIn} from 'next-auth/react'
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { getServerSession } from "next-auth";
import { buildNextAuthOptions } from "@/pages/api/auth/[...nextauth].api";


export default function Login() {
    
    return (
        <AuthPageContainer>

            <AuthContainer>
                <AuthHero>
                    <Logo/>
                    
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

                    <AuthGoogle onClick={()=>signIn("google" ,{callbackUrl:"/home"})}><Image src={googleIcon} width={30} alt="google" /> Login with Google</AuthGoogle>
                </Auth>
            </AuthContainer>





        </AuthPageContainer>

    )
}


export const getServerSideProps:GetServerSideProps = async (context:GetServerSidePropsContext)=>{

    const session = await getServerSession(context.req, context.res, buildNextAuthOptions(context.req, context.res))


    if(session){
        const user = {
            username:session.user?.name,
            email:session.user?.email,
            image: session.user?.image ? session.user.image: null
        }

        return {
            redirect:{
                destination:"/home",
                permanent:false,
            },

            props:{
                user,
            }
        }
    }

    

    return {
        props:{
            session:null,
        },
    }
}