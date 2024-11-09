

import { KanbanContext } from "@/contexts/kanban";
import { z } from 'zod'
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import React, { useContext } from "react";


interface TaskDialogProps {
    board_id: string
}


import { v4 as uuidv4 } from 'uuid';
import { clientAxios } from "@/lib/axios";
import { useSession } from "next-auth/react";
import { AxiosError } from "axios";
import { TaskDialogContainer, TaskForm, TaskFormActions, TaskFormSubmit } from "./styles";

const inputTaskSchema = z.object({
    task_title: z.string()
        .max(100, { message: "number of characters has been exceeded!" })
        .nonempty("Task name is required!")
})

type InputTaskDialog = z.infer<typeof inputTaskSchema>

export default function AddTaskDialog({ board_id }: TaskDialogProps) {

    const { handleAddToggle, addTask, kanbanBoards } = useContext(KanbanContext)

    const addToggleStatus = kanbanBoards.filter(boardType=>boardType.id == board_id)[0].status

    const session = useSession()
    
    const { handleSubmit, register, reset } = useForm<InputTaskDialog>({
        resolver: zodResolver(inputTaskSchema)
    })


    const handleInputTask = async ({ task_title }: InputTaskDialog) => {

        try {

            const response = await clientAxios.post('/task',{
                task_title,
                board_id,
                task_id:uuidv4()
            })
    
            const {task} = response.data


            addTask(task.id, task.board_id, task.title)
            handleAddToggle("", task.board_id)
        
            reset()

            
        } catch (error) {
            if(error instanceof AxiosError){
                alert(error.response?.data?.message)
            }
            
        }
        
    }

    const handleCancelInputTask = ()=>{
        handleAddToggle("", board_id)
        reset()
    }


    return (

        <TaskDialogContainer >
            <TaskForm className={addToggleStatus  ? addToggleStatus : ""} onSubmit={handleSubmit(handleInputTask)} >
                <label htmlFor="taskName">Task Title*</label>
                <input autoComplete="off" {...register("task_title")} required type="text" id="taskName" />

                <TaskFormActions>
                    <TaskFormSubmit type="submit">Submit</TaskFormSubmit>
                    <button onClick={handleCancelInputTask} type="button">Cancel</button>
                </TaskFormActions>
            </TaskForm>
        </TaskDialogContainer>

    )



}