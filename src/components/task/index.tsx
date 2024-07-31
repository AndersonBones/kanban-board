import { TaskInterface } from "@/types/kanban";
import { KanbanTask, KanbanTaskActions, TaskNameArea } from "./styles";
import { Trash, PencilSimple } from "phosphor-react";
import { useContext } from "react";
import { KanbanContext } from "@/contexts/kanban";
import React from "react";
import EditTaskDialog from "../editTaskDialog";
import { clientAxios } from "@/lib/axios";
import { v4 as uuidv4 } from 'uuid';
import { useSession } from "next-auth/react";
import { AxiosError } from "axios";

export default function Task({ board_id, task_id, title, status }: TaskInterface) {

    const { removeTask, kanbanBoards, handleEditTask} = useContext(KanbanContext)
    const taskSelected = kanbanBoards.filter(boardType=>boardType.id == board_id)[0].tasks.filter(task=>task.id == task_id)[0].status
   
    const session = useSession()

    const handleRemoveTask = async ()=>{

        try {

            const response = await clientAxios.delete('task/remove', {
                data: {
                    task_id
                },

            })

            const {task, status} = response.data

           
            
            removeTask(task.board_id, task.id)




        } catch (error) {
            if (error instanceof AxiosError) {
                
                alert(error?.response?.data?.message)
                return
            }
        }

    }

    return (

        <>
            <KanbanTask className={taskSelected} >

                <TaskNameArea>

                    <p>
                        {title}
                    </p>
                </TaskNameArea>


                <KanbanTaskActions>
                    <button onClick={() => handleEditTask(board_id, "active", task_id)}><PencilSimple size={22} /></button>
                    <button onClick={handleRemoveTask}><Trash size={22} /></button>
                </KanbanTaskActions>
            </KanbanTask>


            <EditTaskDialog task={{
                board_id,
                task_id,
                title

            }} />

        </>

    )
}