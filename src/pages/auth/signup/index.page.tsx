import { Auth, AuthAlternative, AuthContainer, AuthCredentials, AuthForm, AuthFormActions, AuthFormActionsPassword, AuthGoogle, AuthHero, AuthPageContainer, AuthTitle, InputEmail, InputPassord, PasswordContainer, RememberContainer, SubmitLogin, ToggleMask } from "../login/styles";

import { useRef, useState } from "react";

import googleIcon from '../../../assets/google.png'
import Image from 'next/image'

import { Eye, EyeSlash } from "phosphor-react";
export default function Signup(){
    const inputPasswordElement = useRef<HTMLInputElement>(null)
    const inputPasswordReElement = useRef<HTMLInputElement>(null)
    const [toggleMaskPassword, setToggleMaskPassword] = useState("password")
    const [toggleMaskRePassword, setToggleMaskRePassword] = useState("password")

    

    const clickToggleMaskPassword = ()=>{

        
        if(toggleMaskPassword == "password"){
            setToggleMaskPassword("text")

        }else{
            setToggleMaskPassword('password')
        }

    }

    const clickToggleMaskRePassword = ()=>{

        
        if(toggleMaskRePassword == "password"){
            setToggleMaskRePassword("text")

        }else{
            setToggleMaskRePassword('password')
        }

    }
    return (
        <AuthPageContainer>

            <AuthContainer>
                <AuthHero>
                    <h1>Join us today!</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>

                </AuthHero>

                <Auth>
                    <AuthTitle>
                        <h1>Sign up</h1>
                    </AuthTitle>
                    <AuthForm className="card " method="post" action={"#"}>
                        <AuthCredentials>
                            <input type="text" name="username" id="username" placeholder="Username" />
                            <InputEmail type="email" placeholder="E-mail" />
                            <PasswordContainer >
                                <InputPassord type={toggleMaskPassword}  ref={inputPasswordElement} placeholder="Choose a Password" />
                                
                                <ToggleMask type="button" onClick={(e)=>{
                                    clickToggleMaskPassword()
                                    e.preventDefault()

                                }}>{toggleMaskPassword == "password"? <Eye size={20}/> :<EyeSlash size={20}/>}</ToggleMask>
                            </PasswordContainer>

                            <PasswordContainer >
                                <InputPassord type={toggleMaskRePassword} ref={inputPasswordReElement} placeholder="Re-Enter Password" />
                                
                                <ToggleMask type="button" onClick={(e)=>{
                                    clickToggleMaskRePassword()
                                    e.preventDefault()

                                }}>{toggleMaskRePassword == "password"? <Eye size={20}/> :<EyeSlash size={20}/>}</ToggleMask>
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
                            
                            <SubmitLogin>Sign up</SubmitLogin>
                            <span>Already a member? <a href="#">Login Here</a></span>
                        </AuthFormActions>

                    </AuthForm>

                    <AuthAlternative></AuthAlternative>

                    <AuthGoogle><Image src={googleIcon} width={30} alt="google" /> Login with Google</AuthGoogle>
                </Auth>
            </AuthContainer>





        </AuthPageContainer>
    )
}