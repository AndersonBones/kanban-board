import { styled } from "@/styles";
import Image from "next/image";

export const KanbanAccount = styled("div",{
    display:'flex',
    height:'4rem',
    alignItems:"center",
    borderRadius:'.3rem',
    justifyItems:'center',
    gap:'1rem',
    padding:'0 .5rem',
    border:"1px solid white"

})

export const LogoutButton = styled("button",{
    border:"none",
    cursor:"pointer",
    backgroundColor:'transparent',
    padding:".2rem 1rem",
    color:'$white',

})

export const HeroAccount = styled('div',{
    display:'flex',
    alignItems:'center',
    gap:'.4rem'
})


export const AvatarImg = styled(Image, {
    borderRadius:"50%",
})