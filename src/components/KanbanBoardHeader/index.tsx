
import { ReactNode } from "react";

import {KanbanBoardHeader} from './styles'
import { KanbanBoardColors } from "@/types/kanban";


interface KanbanHeaderProps{
    children:ReactNode

}

export default function KanbanBoadHeaderComponent({children}:KanbanHeaderProps){
    return (

        <KanbanBoardHeader >
            {children}
        </KanbanBoardHeader>
    
        
        
    )
}