import { KanbanBoardColors, KanbanBoardType } from "@/types/kanban";
import { KanbanTask, KanbanTaskActions, TaskNameArea } from "./styles";
import { Trash, NotePencil } from "phosphor-react";
import { useContext } from "react";
import { KanbanContext } from "@/contexts/kanban";
import React from "react";

interface TaskInterface {
    title: string
    taskId: string
    board: KanbanBoardType
}

export class Task extends React.Component<TaskInterface> {

    constructor({board, taskId, title}:TaskInterface){
        super({board, taskId, title})
    }

    static contextType = KanbanContext
    context!: React.ContextType<typeof KanbanContext>


    render(): React.ReactNode {
        const {handleRemoveTask} = this.context
        const {board, taskId, title} = this.props
        
        return (
            <KanbanTask >
    
                <TaskNameArea>
    
                    <p>
                        {title}
                    </p>
                </TaskNameArea>
    
    
                <KanbanTaskActions>
                    <button><NotePencil size={20} /></button>
                    <button onClick={()=>handleRemoveTask(board, taskId)}><Trash size={20} /></button>
                </KanbanTaskActions>
            </KanbanTask>
        )
    }
    
}