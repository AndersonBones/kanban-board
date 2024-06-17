import { styled } from "@/styles";

export const KanbanBoardHeader = styled("header",{
  
    display:'flex',
    alignItems:'center',
    padding:'.4rem 0',
    color:'$white',

   
    marginBottom:'.7rem',

    
    span:{
        textAlign:'center',
        width:'80%'
    },

    button:{
        cursor:"pointer",
        width:"20%"
    }
})