import { TaskInterface } from "@/types/kanban";

import { Check, X  } from "phosphor-react";
import { useContext, useState } from "react";
import { KanbanContext } from "@/contexts/kanban";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "next-auth/react";
import { clientAxios } from "@/lib/axios";
import { AxiosError } from "axios";
import { EditTaskActions, EditTaskContainer } from "./styles";


interface EditTaskDialogProps{
    task:TaskInterface
}


const newTaskSchema = z.object({
    task_title:z.string()
    .max(70, {message:"number of characters has been exceeded!"})
    .nonempty("Task name is required!")
})

type NewTaskTitleDialog = z.infer<typeof newTaskSchema>


export default function EditTaskDialog({task:{board_id, task_id, title,status}}:EditTaskDialogProps){


    const { handleEditTask, editTask, kanbanBoards} = useContext(KanbanContext)

    const session = useSession()

    const [value, setValue] = useState(title)

    const {handleSubmit, register, reset} = useForm<NewTaskTitleDialog>({
        resolver:zodResolver(newTaskSchema)
    })

    const taskSelected = kanbanBoards.filter(boardType=>boardType.id == board_id)[0].tasks.filter(task=>task.id == task_id)[0].status


    const handleSetEditTaskTitle = async (data:NewTaskTitleDialog)=>{

        setValue(data.task_title)
    
        
    
    }

    const handleCancel = async ()=>{
        handleEditTask(board_id, "", task_id)
        reset()
    }

    const handleEditTaskTitle = async (data:NewTaskTitleDialog)=>{

        try {

            const response = await clientAxios.post('/task/update', {
                task_title: data.task_title,
                task_id
            })
    
            const { status, task } = response.data

            setValue(data.task_title)
            editTask(task.board_id, task.title, task.id)
            handleEditTask(task.board_id, "", task.id) // hidden task title input

            reset()

            

        } catch (error) {
            if (error instanceof AxiosError) {
                
                alert(error?.response?.data?.message)
                return
            }
        }
      
       
    }   


    
    return (
        <EditTaskContainer onSubmit={handleSubmit(handleEditTaskTitle)} className={taskSelected}>
            <input {...register("task_title", {value})}  autoComplete="off" type="text"  />

            <EditTaskActions>
                <button type="submit"><Check color="green" size={20}/></button>
                <button onClick={handleCancel} type="button"><X color="red" size={20}/></button>
            </EditTaskActions>
        </EditTaskContainer>
    )
}