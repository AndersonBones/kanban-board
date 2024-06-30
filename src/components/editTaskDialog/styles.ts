import { styled } from "@/styles";

export const EditTaskContainer = styled("form",{

    
    background:"$white",
    padding:'.3rem',
    borderRadius:".3rem",
    gap:'.2rem',
    boxShadow:"rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
    display:"none",
    gridTemplateRows:"auto 30%",

    '&.active':{
        display:"grid"
    },

    input:{
        border:"1px solid gray"
    }

})

export const EditTaskActions = styled('div',{
    display:"flex",
    justifyContent:"flex-end",
    
    
    gap:".5rem",

    button:{
        background:"transparent"
    }
    
})