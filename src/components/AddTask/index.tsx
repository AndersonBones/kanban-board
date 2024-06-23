import { ReactNode, useContext } from "react"
import { AddTaskButton } from "./styles"
import { KanbanBoardType, KanbanContextProps } from "@/types/kanban"
import { KanbanContext } from "@/contexts/kanban"
import React from "react"

interface AddTaskInterface{
    kanbanBoard:KanbanBoardType,
    children:ReactNode
}



export class AddTask extends React.Component<AddTaskInterface>{

    static contextType = KanbanContext
    context!: React.ContextType<typeof KanbanContext>


    constructor({children, kanbanBoard}:AddTaskInterface){
        super({children, kanbanBoard})
    };

    handleOpenTaskName = ():void =>{
        
        const {handleToggle} = this.context
        handleToggle("active",this.props.kanbanBoard)

    

        // handleAddTask(kanbanBoard, "task1")
    }
    
    
    render(): ReactNode {
        
        const {children} = this.props
        
        
        return (
            
            <AddTaskButton onClick={this.handleOpenTaskName}>{children}</AddTaskButton>
        )
    }

   
    
}

AddTask.contextType = KanbanContext