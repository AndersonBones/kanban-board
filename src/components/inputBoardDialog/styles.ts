import { styled } from "@/styles";
import { useColor, ColorPicker } from "react-color-palette";


export const InputBoard = styled('form',{
    width:"20rem"
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

export const AddButton = styled("button",{
    display:"flex",
    alignItems:"center",
    padding:"1rem",
    gap:'.3rem',

    color:"$darkGray",
    fontWeight:"bold"
})

export const ColorPickerButton = styled('button',{
    width:"5rem",
    borderRadius:".3rem",
    color:"$white",
    opacity:1
})