import { styled } from "@/styles";
import Image from "next/image";

export const KanbanAccount = styled("div",{
    display:'flex',
    height:'4rem',
    alignItems:"center",
    borderRadius:'.3rem',
    justifyItems:'center',
    gap:'1rem',
    padding:"0 1rem",

    backgroundColor:"$gray600"

})

export const LogoutButton = styled("button",{
    border:"none",
    cursor:"pointer",
    backgroundColor:'transparent',
   
    color:'$darkGray',
    
})

export const HeroAccount = styled('div',{
    display:'flex',
    alignItems:'center',
    gap:'.4rem',

    span:{
        color:'$darkGray',
        fontWeight:"bold"
    }
})


export const AvatarImg = styled(Image, {
    borderRadius:"50%",
})