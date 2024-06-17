import { styled } from "@/styles";

export const KanbanCard = styled('div',{

    display:"grid",
    gridTemplateRows:"80% 20%",
    
   
    padding:'.3rem',

    borderRadius:".3rem",
    backgroundColor:'$white',
    boxShadow:"rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",


    
})

export const TaskNameArea = styled("div",{
    display:"flex",
    alignItems:"center",
    justifyContent:"center",


    p:{
        textAlign:"center",

        wordBreak:'break-word'
    }
})

export const KanbanCardActions = styled('div',{
    display:"flex",
    alignItems:"flex-end",
    justifyContent:"flex-end",
    gap:".5rem",

    button:{
        backgroundColor:"$white",
        color:"black"
    }
})