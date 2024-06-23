
import { Auth, AuthAlternative, AuthContainer, AuthGoogle, AuthHero, AuthPageContainer, AuthTitle} from "../styles";

import googleIcon from '../../../assets/google.png'
import Image from 'next/image'

import {Logo} from "@/components/logo";
import LoginForm from "@/components/authForms/login";



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

                    <AuthGoogle><Image src={googleIcon} width={30} alt="google" /> Login with Google</AuthGoogle>
                </Auth>
            </AuthContainer>





        </AuthPageContainer>

    )
}


