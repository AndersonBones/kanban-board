
import { TaskForm, TaskFormActions, TaskFormSubmit } from "./styles";
import { KanbanBoardType } from "@/types/kanban";
import { KanbanContext } from "@/contexts/kanban";
import {z} from 'zod'
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import React, { useContext } from "react";

interface TaskDialogProps{
    board: KanbanBoardType
}



const inputTaskSchema = z.object({
    taskName:z.string()
    .max(100, {message:"number of characters has been exceeded!"})
    .nonempty("Task name is required!")
})

type InputTaskDialog = z.infer<typeof inputTaskSchema>

export default function TaskDialog({board}:TaskDialogProps){

    const {handleToggle, handleAddTask, toggles} = useContext(KanbanContext)

    
    const {handleSubmit, register, reset} = useForm<InputTaskDialog>({
        resolver:zodResolver(inputTaskSchema)
    })


    const handleInputTask = ({taskName}:InputTaskDialog)=>{

        handleAddTask(board, taskName)
        handleToggle("", board)

        console.log(taskName)

        
        reset()
    }


    return (
        <TaskForm className={toggles[board]} onSubmit={handleSubmit(handleInputTask)} >
             <label  htmlFor="taskName">Task Title*</label>
             <input {...register("taskName")}  required type="text" id="taskName" />
 
             <TaskFormActions>
                 <TaskFormSubmit type="submit">Submit</TaskFormSubmit>
                 <button onClick={()=>handleToggle("", board)} type="button">Cancel</button>
             </TaskFormActions>
        </TaskForm>
     )

    
    
}