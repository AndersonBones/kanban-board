import { KanbanBoardType, KanbanContextInterface, KanbanContextProps, KanbanData, KanbanToggle, TogglesInterface } from "@/types/kanban";
import { createContext, useEffect, useState } from "react";

import { v4 as uuidv4 } from 'uuid';




export const KanbanContext = createContext({} as KanbanContextProps)

export const KanbanContextProvider = ({children}:KanbanContextInterface)=>{

    const [toggles, setToggle] = useState<TogglesInterface>({
        Backlog: "",
        inDev:"",
        inQA:"",
        Completed:""

    })

    
    const [kanban, setTask] = useState<KanbanData>(
        {
            Backlog:{
                id:"Backlog",
                tasks:[{
                    TaskId:uuidv4(),
                    taskName:""
                }]
            },
            inDev:{
                id:"inDev",
                tasks:[{
                    TaskId:uuidv4(),
                    taskName:""
                }]
            },
            inQA:{
                id:"inQA",
                tasks:[{
                    TaskId:uuidv4(),
                    taskName:""
                }]
            },
            Completed:{
                id:"Completed",
                tasks:[{
                    TaskId:uuidv4(),
                    taskName:""
                }]
            }
        })

    
    const handleToggle = (status:KanbanToggle, board?:KanbanBoardType)=>{

        if(board){
            let newToggles = {...toggles}
            newToggles[board] = status

            setToggle(newToggles)
        }
        
    }

    const handleAddTask = (board:KanbanBoardType, taskName:string)=>{
        
        let newKanban = {...kanban}
        newKanban[board].tasks.push({
            TaskId:uuidv4(),
            taskName
        })

        setTask(newKanban)

    }


    const handleRemoveTask = (board:KanbanBoardType, taskId:string)=>{
        let newKanban = {...kanban}
        newKanban[board].tasks = newKanban[board].tasks.filter((task)=>task.TaskId != taskId)
        
        setTask(newKanban)
    }



    useEffect(()=>{
        console.log(toggles)
    },[toggles])


    return (
        <KanbanContext.Provider value={{
            handleToggle,
            handleRemoveTask,
            toggles,
            kanbanData:kanban,
            handleAddTask
        }}>

            {children}

        </KanbanContext.Provider>
    )
}