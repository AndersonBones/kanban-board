
import { checkEmail } from "@/utils/checkIfEmailIsValid"
import { AuthCredentials, AuthForm, AuthFormActions, AuthFormActionsPassword, InputEmail, InputPassword, PasswordContainer, RememberContainer, SubmitLogin, ToggleMask } from "../styles"
import { z } from "zod"
import { useRef, useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Eye, EyeSlash } from "phosphor-react"
import { useRouter } from "next/navigation"
import { clientAxios } from "@/lib/axios"
import { headers } from "next/headers"
import { AxiosError } from "axios"



const signupCredentialsSchema = z.object({
    name:z.string().min(5,{message:"Password must be at least 5 characters long"}),
    email:z.string()
    .max(30, {message:"number of characters has been exceeded!"})
    .nonempty("Email cannot be empty.").refine(async(e)=>{
        return await checkEmail(e)
    }, {message:"is not a valid email address"}),
    password:z.string().min(8, {message:"Password must be at least 8 characters long."}),
    confirm:z.string().min(8, {message:"Password must be at least 8 characters long."})

}).refine((data)=>data.password === data.confirm,{message:"Passwords don't match", path:['confirm']})

type SignupCredentials = z.infer<typeof signupCredentialsSchema>



export default function SignupForm() {

    const route = useRouter()
    const [toggleMaskPassword, setToggleMaskPassword] = useState("password")
    const [toggleMaskRePassword, setToggleMaskRePassword] = useState("password")

    const {register, reset, handleSubmit, formState:{errors}} = useForm<SignupCredentials>({
        resolver:zodResolver(signupCredentialsSchema)
    })

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


    const handleSignup = async (data:SignupCredentials)=>{

  
        try {
            const response = await clientAxios.post("/user/register",{
                name:data.name,
                email:data.email,
                password:data.password
                
            })

            const {status, user} = response.data

            console.log(user)

        } catch (error) {
            if (error instanceof AxiosError) {

                alert(error?.response?.data?.error)
                return
            }
        }
    
    }

    return (
        <AuthForm onSubmit={handleSubmit(handleSignup)}>
            <AuthCredentials>
                <label htmlFor="name">
                    <input {...register("name")} type="text" name="name" id="name" placeholder="Name" />
                    {errors.name?(<span >{errors.name.message}</span>):(<span></span>)}
                </label>
                
                <label htmlFor="email">
                    <InputEmail {...register("email")} type="email" id="email" placeholder="E-mail" />
                    {errors.email?(<span >{errors.email.message}</span>):(<span></span>)}
                </label>
                
                <label htmlFor="password">
                    <PasswordContainer >
                        
                        <InputPassword {...register("password")} id="password" type={toggleMaskPassword} placeholder="Password" />
                        
                        
                        <ToggleMask type="button" onClick={(e) => {
                            clickToggleMaskPassword()
                            e.preventDefault()

                        }}>{toggleMaskPassword == "password" ? <Eye size={20} /> : <EyeSlash size={20} />}</ToggleMask>
                    </PasswordContainer>

                    {errors.password?(<span >{errors.password.message}</span>):(<span></span>)}
                </label>
                
                <label htmlFor="confirm">
                    <PasswordContainer >
                        <InputPassword {...register("confirm")} id="confirm" type={toggleMaskRePassword}  placeholder="Confirm password" />

                        <ToggleMask type="button" onClick={(e) => {
                            clickToggleMaskRePassword()
                            e.preventDefault()

                        }}>{toggleMaskRePassword == "password" ? <Eye size={20} /> : <EyeSlash size={20} />}</ToggleMask>
                    </PasswordContainer>
                    {errors.confirm?(<span >{errors.confirm.message}</span>):(<span></span>)}
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

                <SubmitLogin>Sign up</SubmitLogin>
                <span>Already a member? <button type="button" className="goLogin" onClick={()=>route.push("/auth/login")}>Login Here</button></span>
            </AuthFormActions>

        </AuthForm>

    )
}