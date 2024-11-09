import { styled } from "@/styles";




export const InputBoard = styled('form',{
    width:"20rem",


})

export const InputBoardActions = styled("div",{
    display:"flex",
    gap:".5rem",
    justifyContent:"space-between",

    button:{
        padding:".5rem"
    },

    backgroundColor:'$white',
    div:{
        display:"flex",
        gap:"1rem"
    }
})

export const SubmitBoardTitle = styled("button",{
    background:"$emerald_green"
})

export const ColorPickerButton = styled('button',{
    width:"5rem",
    borderRadius:".3rem",
    color:"$white",
    opacity:1
})



export const DeleteDialog = styled('form',{
    
    background:"White",
    display:"flex",
    flexDirection:"column",
    gap:"2rem",
    justifyContent:"center",

    borderRadius:".3rem",
    padding:"2rem 0"
})

export const DeleteDialogMessage = styled("div",{
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    textAlign:"center",

  
})

export const DeleteDialogActions = styled("div",{
    width:"50%",
   
    display:"flex",
    justifyContent:"space-between",
    margin:"auto",
    button:{
        padding:".5rem"
    }
})
export const ConfirmButton = styled("button",{
    background:"$emerald_green",
    color:"$white"
})

export const CancelButton = styled("button",{
    background:"$red",
    color:"$white"
})

export const ColorPicker = styled('div',{
    margin:"auto",
    display:"none",

    '&.active':{
        display:"flex"
    }
})