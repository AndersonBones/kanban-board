import { KanbanBoardColors, KanbanBoardType, TaskInterface } from "@/types/kanban";
import { KanbanTask, KanbanTaskActions, TaskNameArea } from "./styles";
import { Trash, NotePencil } from "phosphor-react";
import { useContext } from "react";
import { KanbanContext } from "@/contexts/kanban";
import React from "react";
import EditTaskDialog from "../editTaskDialog";


export class Task extends React.Component<TaskInterface> {

    constructor(props: TaskInterface) {
        super(props)
    }

    static contextType = KanbanContext
    context!: React.ContextType<typeof KanbanContext>




    render(): React.ReactNode {
        const { removeTask, handleEditTask, editToogle } = this.context
        const { board, taskId, title } = this.props

        const taskSelected = editToogle[this.props.board].filter(task => {
            return task.taskId == this.props.taskId
        })

        return (

            <>
                <KanbanTask className={taskSelected[0] ? taskSelected[0].status : ""} >

                    <TaskNameArea>

                        <p>
                            {title}
                        </p>
                    </TaskNameArea>


                    <KanbanTaskActions>
                        <button onClick={() => handleEditTask(this.props.board, "active", this.props.taskId)}><NotePencil size={20} /></button>
                        <button onClick={() => removeTask(board, taskId)}><Trash size={20} /></button>
                    </KanbanTaskActions>
                </KanbanTask>

                <EditTaskDialog task={{
                    board: this.props.board,
                    taskId: this.props.taskId,
                    title: title

                }} />

            </>

        )
    }

}