import { styled } from "@/styles";


export const TaskDialogContainer = styled("div",{
    padding:"0 .8rem"
})

export const TaskForm = styled("form",{
    
    display:"none",
    flexDirection:"column",
    gap:'1rem',
    padding:'1rem',
    borderRadius:'.3rem',
    backgroundColor:"$white",
    boxShadow:"rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",

    input:{
        backgroundColor:"$gray"
    },

    '&.active':{
        display:'flex'
    }

})

export const TaskFormActions = styled('div',{
    display:"flex",
    gap:".5rem",
 

    button:{
        padding:".5rem"
    },

    backgroundColor:'$white',

})
export const TaskFormSubmit = styled('button',{
    backgroundColor:'$linkedinBlue',
    color:'$white',
  
})