import { styled } from "@/styles";

export const KanbanAccount = styled("div",{
    display:'flex',
    height:'4rem',
    alignItems:"center",
    borderRadius:'.3rem',
    justifyItems:'center',
    gap:'1rem',
    padding:'0 .5rem',

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