import { ReactNode } from "react";
import { KanbanBoard } from "./styles";
import { KanbanBoardColors } from "@/types/kanban";


interface KanbanBoardProps{
    children:ReactNode
    bg: KanbanBoardColors
}
export default function KanbanBoardElement({children, bg}:KanbanBoardProps){
    return(
        <KanbanBoard css={{backgroundColor:bg.color}} >
            {children}
            
        </KanbanBoard>
    )
}