import { styled } from "@/styles";

export const TaskForm = styled("form",{
    display:"flex",
    flexDirection:"column",
    gap:'1rem',
    padding:'1rem',
    borderRadius:'.3rem',
    backgroundColor:"$white",
  

    input:{
        backgroundColor:"$gray"
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