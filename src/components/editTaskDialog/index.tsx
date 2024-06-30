import { TaskInterface } from "@/types/kanban";
import { EditTaskActions, EditTaskContainer } from "./styles";
import { Check, X  } from "phosphor-react";
import { useContext, useState } from "react";
import { KanbanContext } from "@/contexts/kanban";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";


interface EditTaskDialogProps{
    task:TaskInterface
}


const newTaskSchema = z.object({
    taskName:z.string()
    .max(100, {message:"number of characters has been exceeded!"})
    .nonempty("Task name is required!")
})

type NewTaskTitleDialog = z.infer<typeof newTaskSchema>


export default function EditTaskDialog(taskProps:EditTaskDialogProps){

    const {editToogle, handleEditTask, editTask, kanbanData} = useContext(KanbanContext)
    
    const [value, setValue] = useState(taskProps.task.title)

    const {handleSubmit, register} = useForm<NewTaskTitleDialog>({
        resolver:zodResolver(newTaskSchema)
    })

    const taskSelected = editToogle[taskProps.task.board].filter(task=>{
        return task.taskId == taskProps.task.taskId
    })

    const handleSetEditTaskTitle = (data:NewTaskTitleDialog)=>{
    
        setValue(taskProps.task.title)
    }

    const handleEditTaskTitle = (data:NewTaskTitleDialog)=>{
        editTask(taskProps.task.board, data.taskName, taskProps.task.taskId)
        handleEditTask(taskProps.task.board, "", taskProps.task.taskId)
    }   


    
    return (
        <EditTaskContainer onSubmit={handleSubmit(handleEditTaskTitle)} className={taskSelected[0] ? taskSelected[0].status : ""}>
            <input {...register("taskName", {value})} onChange={handleSubmit(handleSetEditTaskTitle)} type="text"  />

            <EditTaskActions>
                <button type="submit"><Check color="green" size={20}/></button>
                <button onClick={()=>handleEditTask(taskProps.task.board, "", taskProps.task.taskId)} type="button"><X color="red" size={20}/></button>
            </EditTaskActions>
        </EditTaskContainer>
    )
}