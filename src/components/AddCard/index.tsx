import { ReactNode, useContext } from "react"
import { AddCardButton } from "./styles"
import { KanbanBoardType } from "@/types/kanban"
import { KanbanContext } from "@/contexts/kanban"

interface AddCardInterface{
    kanbanBoard:KanbanBoardType,
    children:ReactNode
}

export default function AddCard({kanbanBoard:{board}, children}:AddCardInterface){

    const {handleAddTask} = useContext(KanbanContext)

   
    return (
    
        <AddCardButton onClick={()=>handleAddTask({board}, "task1")}>{children}</AddCardButton>
    )
}