import { checkEmail } from "@/utils/checkIfEmailIsValid"
import { AuthCredentials, AuthForm, AuthFormActions, AuthFormActionsPassword, InputEmail, InputPassword, PasswordContainer, RememberContainer, SubmitLogin, ToggleMask } from "../styles"
import { z } from "zod"
import { useRef, useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Eye, EyeSlash } from "phosphor-react"

const loginCredentialsSchema = z.object({
    email:z.string()
    .max(50, {message:"number of characters has been exceeded!"})
    .nonempty("Email cannot be empty.").refine(async(e)=>{
        return await checkEmail(e)
    }, {message:"is not a valid email address"}),
    password:z.string().min(8, {message:"Password must be at least 8 characters long."})

})

type LoginCredentials = z.infer<typeof loginCredentialsSchema>


export default function LoginForm() {
    
    const [toggleMask, setToggleMask] = useState("password")

    const {register, reset, handleSubmit, formState:{errors, isSubmitting}} = useForm<LoginCredentials>({
        resolver:zodResolver(loginCredentialsSchema)
    })

    const clickToggle = ()=>{

        
        if(toggleMask == "password"){
            setToggleMask("text")

        }else{
            setToggleMask('password')
        }

    }

  
    const handleLogin = ( {email, password}:LoginCredentials)=>{
    
        console.log(email, password)
     
        
    }
    return (
        <AuthForm onSubmit={handleSubmit(handleLogin)}>
            <AuthCredentials>
                <label htmlFor="email">
                    <InputEmail {...register("email")} required type="text" id="email" placeholder="E-mail" />
                    {errors.email?(<span >{errors.email.message}</span>):(<span></span>)}
                    
                </label>
                
                <label htmlFor="password">
                    
                    <PasswordContainer >
                    
                        <InputPassword {...register("password")} required type={toggleMask} id="password" placeholder="Password" />
                        
                        <ToggleMask type="button" onClick={clickToggle}>{toggleMask == "password" ? <Eye size={20} /> : <EyeSlash size={20} />}</ToggleMask>
                    </PasswordContainer>
                    {errors.password? (<span >{errors.password.message}</span>):(<span></span>)}
                </label>
                
                

            </AuthCredentials>

            <AuthFormActions>
                <AuthFormActionsPassword>
                    <RememberContainer>
                        <input type="checkbox" name="remember" id="remember" value={"password"} />
                        <label htmlFor="remember">Remember me</label>
                    </RememberContainer>

                    <a href="#">Forgot password?</a>
                </AuthFormActionsPassword>

                
                <span>Dont have on accout <a href="#">Signup</a></span>
            </AuthFormActions>

      

            <SubmitLogin type="submit" disabled={isSubmitting}>Login</SubmitLogin>

        </AuthForm>
    )
}