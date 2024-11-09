import { styled } from "@/styles";

export const Header = styled("div",{
  
    display:'flex',
    alignItems:'center',
    justifyContent:"space-between",
    padding:"0 .8rem",
    color:'$white',

    
    marginBottom:'.7rem',

    
 

    button:{
        cursor:"pointer",
      
    }
})

export const KanbanBoardActions = styled("div",{
    display:'flex',
    gap:'.5rem',
    alignItems:"center",

    background:'$white',
    borderRadius:".2rem",
    padding:'.1rem .2rem',

    button:{
        background:"transparent",
        color:"$darkGray"
    }
    
})


export const UpdateBoard = styled("button",{

})


export const DeleteBoard = styled("button",{

})