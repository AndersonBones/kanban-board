import { styled } from "@/styles";
import { Password } from 'primereact/password';

export const AuthPageContainer = styled('div',{
    width:'100%',
    height:'100%',
    display:'flex',
    justifyContent:"center",
    alignItems:"center",


})

export const Auth = styled("div",{
    
    display:'flex',
    flexDirection:"column",
    gap:'2rem',
   

    padding:'1rem 1.5rem'
})
export const AuthContainer = styled("div",{
    display:'grid',
    gridTemplateColumns:"25rem 25rem",
    borderRadius:'.3rem',
    overflow:'hidden',
    boxShadow:"rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
})


export const AuthHero = styled("div",{
    // backgroundColor:"$linkedinBlue",
    color:"$white",

    display:"flex",
    flexDirection:"column",
    gap:'1rem',

    justifyContent:"center",
    
    textAlign:"center",

    p:{
        lineHeight:"1.5rem"
    },

    padding:'0 1rem',

    backgroundImage:"linear-gradient( 135deg, #ABDCFF 10%, #0396FF   100%);"
})


export const AuthTitle = styled('div',{
    textAlign:"center",
    letterSpacing:".2rem",
    color:'$darkGray'
})

export const AuthAlternative = styled('div',{

    position:"relative",
    height:'2px',
    width:'100%',
    margin:".5rem 0",
    backgroundColor:"$gray",

    '&:before':{
        content:"Or",
        position:"absolute",
        top:"50%",
        left:"50%",
        transform:"translate(-50%, -50%)",
        backgroundColor:"$white",
        color:'$darkGray', 
        padding:"0 1rem", 
    }
})

export const AuthGoogle = styled('button',{
    display:'flex',
    alignItems:"center",
    justifyContent:"center",
    gap:'.5rem',
    padding:'.5rem 0',

})
