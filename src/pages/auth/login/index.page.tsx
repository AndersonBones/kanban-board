



import { Auth, AuthAlternative, AuthContainer, AuthCredentials, AuthForm, AuthFormActions, AuthFormActionsPassword, AuthGoogle, AuthHero, AuthPageContainer, AuthTitle, InputEmail, InputPassord, PasswordContainer, RememberContainer, SubmitLogin, ToggleMask } from "./styles";

import { useRef, useState } from "react";

import googleIcon from '../../../assets/google.png'
import Image from 'next/image'

import { Eye, EyeSlash } from "phosphor-react";
export default function Login() {
    const inputElement = useRef<HTMLInputElement>(null)

    const [toggleMask, setToggleMask] = useState("password")

    const clickToggle = ()=>{

        
        if(toggleMask == "password"){
            setToggleMask("text")

        }else{
            setToggleMask('password')
        }

    }
    return (
        <AuthPageContainer>

            <AuthContainer>
                <AuthHero>
                    <h1>Welcome back!</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>

                </AuthHero>

                <Auth>
                    <AuthTitle>
                        <h1>Login</h1>
                    </AuthTitle>
                    <AuthForm className="card " method="post" action={"#"}>
                        <AuthCredentials>
                            <InputEmail type="email" placeholder="E-mail" />
                            <PasswordContainer >
                                <InputPassord type={toggleMask}  ref={inputElement} placeholder="Password" />
                                <ToggleMask type="button" onClick={(e)=>{
                                    clickToggle()
                                    e.preventDefault()

                                }}>{toggleMask == "password"? <Eye size={20}/> :<EyeSlash size={20}/>}</ToggleMask>
                            </PasswordContainer>
                            
                        </AuthCredentials>

                        <AuthFormActions>
                            <AuthFormActionsPassword>
                                <RememberContainer>
                                    <input type="checkbox" name="remember" id="remember" value={"password"} />
                                    <label htmlFor="remember">Remember me</label>
                                </RememberContainer>
                                
                                <a href="#">Forgot password?</a>
                            </AuthFormActionsPassword>
                            
                            <SubmitLogin>Login</SubmitLogin>
                            <span>Dont have on accout <a href="#">Signup</a></span>
                        </AuthFormActions>

                    </AuthForm>

                    <AuthAlternative></AuthAlternative>

                    <AuthGoogle><Image src={googleIcon} width={30} alt="google" /> Login with Google</AuthGoogle>
                </Auth>
            </AuthContainer>





        </AuthPageContainer>

    )
}