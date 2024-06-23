import { styled } from "@/styles"

export const PasswordContainer = styled('div',{
    display:'flex',
    backgroundColor:"$gray",
    justifyContent:"space-between",
    
    borderRadius:".3rem",

})

export const AuthCredentials = styled('div',{
    display:'flex',
    flexDirection:"column",
    gap:'1rem',
    
    label:{
        display:"flex",
        flexDirection:"column",
        textAlign:"start",
        gap:'.3rem',

        span:{
            height:'.9rem',
            color:"red",
            fontSize:'.9rem'
        }
    },
    input:{
        backgroundColor:"$gray"
    }
})


export const InputPassword = styled('input',{
    width:'100%',

    paddingRight:"0",
    
   
})

export const InputEmail = styled('input',{
    
})

export const ToggleMask = styled("button",{
    padding:'0 .5rem',

    
    
})

export const SubmitLogin = styled("button",{
    padding:'.8rem 0',
    backgroundColor:"$linkedinBlue",
    color:'$white'
})




export const AuthForm = styled('form', {
    display:'flex',
    flexDirection:"column",
    gap:'1rem',
    justifyContent:'center',
    textAlign:"center",

})



export const AuthFormActionsPassword = styled("div",{
    display:"flex",
    justifyContent:"space-between"
})

export const RememberContainer = styled('div',{
    display:"flex",
    gap:'.5rem'
})

export const AuthFormActions = styled('div',{
    display:'flex',
    flexDirection:"column",
    gap:'2rem'
})

