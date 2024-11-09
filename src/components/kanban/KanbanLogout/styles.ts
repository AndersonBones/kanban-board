import { styled } from "@/styles";
import Image from "next/image";

export const KanbanAccount = styled("div",{
    display:'flex',
    height:'4rem',
    alignItems:"center",
    borderRadius:'.5rem',
    justifyItems:'center',
    gap:'1rem',
    padding:"0 1rem",

    backgroundColor:"$emerald_dark_green"

})

export const LogoutButton = styled("button",{
    border:"none",
    cursor:"pointer",
    backgroundColor:'transparent',
  
    color:'$white',
    
})

export const HeroAccount = styled('div',{
    display:'flex',
    alignItems:'center',
    gap:'.5rem',

    span:{
        color:'$white',
        
    }
})


export const AvatarImg = styled(Image, {
    borderRadius:"50%",
})