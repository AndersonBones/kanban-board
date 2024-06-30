
import { TaskDialogContainer, TaskForm, TaskFormActions, TaskFormSubmit } from "./styles";
import { KanbanBoardType } from "@/types/kanban";
import { KanbanContext } from "@/contexts/kanban";
import { z } from 'zod'
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import React, { useContext } from "react";

interface TaskDialogProps {
    board: KanbanBoardType
}



const inputTaskSchema = z.object({
    taskName: z.string()
        .max(100, { message: "number of characters has been exceeded!" })
        .nonempty("Task name is required!")
})

type InputTaskDialog = z.infer<typeof inputTaskSchema>

export default function AddTaskDialog({ board }: TaskDialogProps) {

    const { handleAddToggle, addTask, addToggle } = useContext(KanbanContext)


    const { handleSubmit, register, reset } = useForm<InputTaskDialog>({
        resolver: zodResolver(inputTaskSchema)
    })


    const handleInputTask = ({ taskName }: InputTaskDialog) => {

        addTask(board, taskName)
        handleAddToggle("", board)


        reset()
    }


    return (

        <TaskDialogContainer >
            <TaskForm className={addToggle[board]} onSubmit={handleSubmit(handleInputTask)} >
                <label htmlFor="taskName">Task Title*</label>
                <input autoComplete="off" {...register("taskName")} required type="text" id="taskName" />

                <TaskFormActions>
                    <TaskFormSubmit type="submit">Submit</TaskFormSubmit>
                    <button onClick={() => handleAddToggle("", board)} type="button">Cancel</button>
                </TaskFormActions>
            </TaskForm>
        </TaskDialogContainer>

    )



}