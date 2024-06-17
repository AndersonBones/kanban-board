import { styled } from "@/styles";

export const KanbanContainer = styled('div',{

    gap:'2rem',
    display:'grid',
    
    gridTemplateRows:"8rem 60rem",
    
})

export const KanbanHeader = styled('header', {
    

    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    padding:'0 2rem',
    marginBottom:'2rem',
    backgroundColor:"$linkedinBlue",
    color:"$white"
})

export const KanbanHeaderTitle = styled("div",{
  

})

export const KanbanArea = styled('div',{
    display:'grid',
    width:'95rem',
    margin:'0 auto',
    gridTemplateColumns:'1fr 1fr 1fr 1fr',
    gridTemplateRows:"auto",
    gap:'2rem',
})


export const CardList = styled("div",{
    display:'grid',
    gridAutoRows:"6rem",
    gap:'1rem',
   
    position:'relative'

})

