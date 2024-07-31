import { styled } from "@/styles";

export const ColorPickerContainer = styled("div",{
    display:"none",
    justifyContent:"center",

    '&.active':{
        display:"grid",
        alignItems:"stretch"
    },

})