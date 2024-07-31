import { ReactNode, useContext } from "react"
import { AddTaskButton } from "./styles"
import { KanbanContextProps } from "@/types/kanban"
import { KanbanContext } from "@/contexts/kanban"
import React from "react"

interface AddTaskInterface{
    board_id:string,
    children:ReactNode
}



export class AddTask extends React.Component<AddTaskInterface>{

    static contextType = KanbanContext
    context!: React.ContextType<typeof KanbanContext>


    constructor(props:AddTaskInterface){
        super(props);
    
        
    };

    handleOpenTaskName = ():void =>{

    
        const {handleAddToggle} = this.context
        handleAddToggle("active",this.props.board_id)

    
    }
    
    
    render(): ReactNode {
        
        const {children} = this.props
        
        
        return (
            
            <AddTaskButton onClick={this.handleOpenTaskName}>{children}</AddTaskButton>
        )
    }

   
    
}

AddTask.contextType = KanbanContext