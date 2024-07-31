import { ColorPicker, useColor } from "react-color-palette";
import { useContext } from "react";
import { KanbanContext } from "@/contexts/kanban";
import { KanbanToggle } from "@/types/kanban";
import { ColorPickerContainer } from "./styles";


interface ColorPickerProps{
    status:KanbanToggle
}
export default function ColorPickerComponent({status}:ColorPickerProps){

    const {color, setColor} = useContext(KanbanContext)

    
    return (
        <ColorPickerContainer className={status}>
            <ColorPicker  height={120}  hideInput={["rgb", "hsv"]} color={color} onChange={setColor} />
        </ColorPickerContainer>
        
    )
}