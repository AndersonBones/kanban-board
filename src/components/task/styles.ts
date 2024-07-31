import { styled } from "@/styles";

export const KanbanTask = styled('div',{

    display:"grid",
    gridTemplateRows:"auto 30%",

    
    gap:'.2rem',
    padding:'.3rem',
    
    borderRadius:".3rem",
    backgroundColor:'$white',
    boxShadow:"rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",

    '&.active':{
        display:"none"
    }
    
})

export const TaskNameArea = styled("div",{
    display:"flex",
    alignItems:"center",
    justifyContent:"center",


    overflow:'hidden',
    p:{
        textAlign:"center",
        
        wordBreak:'break-word'
    },

})

export const KanbanTaskActions = styled('div',{
    display:"flex",
    alignItems:"center",
    justifyContent:"flex-end",
    gap:".3rem",
    
    button:{
        display:"flex",
        alignItems:"center",
        border:"none",
        backgroundColor:"$white",
        color:"black"
    }
})


