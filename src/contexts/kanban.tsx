import { KanbanBoardType, KanbanContextInterface, KanbanContextProps, KanbanData, KanbanToggle, AddToggleInterface, EditToggleInterface, TaskInterface } from "@/types/kanban";
import { createContext, useEffect, useState } from "react";

import { v4 as uuidv4 } from 'uuid';



export const KanbanContext = createContext({} as KanbanContextProps)

export const KanbanContextProvider = ({children}:KanbanContextInterface)=>{

    const [kanban, setKanban] = useState<KanbanData>({
        Backlog:{
            id:"Backlog",
            tasks:[{
                taskId:uuidv4(),
                taskTitle:""
            }]
        },
        inDev:{
            id:"inDev",
            tasks:[{
                taskId:uuidv4(),
                taskTitle:""
            }]
        },
        inQA:{
            id:"inQA",
            tasks:[{
                taskId:uuidv4(),
                taskTitle:""
            }]
        },
        Completed:{
            id:"Completed",
            tasks:[{
                taskId:uuidv4(),
                taskTitle:""
            }]
        }
    })

    const [addToggle, setAddToggle] = useState<AddToggleInterface>({
        Backlog: "",
        inDev:"",
        inQA:"",
        Completed:""

    })

    const [editToogle, setEditToggle] = useState<EditToggleInterface>({
        Backlog: [{
            taskId:"",
            status:""
        }],
        inDev:[{
            taskId:"",
            status:""
        }],
        inQA:[{
            taskId:"",
            status:""
        }],
        Completed:[{
            taskId:"",
            status:""
        }]
    })


    const handleEditTask = (board:KanbanBoardType, status:KanbanToggle, taskId:string) =>{
        let newToggles = {...editToogle}

        const taskExists = newToggles[board].filter(task=>task.taskId == taskId)
        
        if(taskExists){
            newToggles[board].map(task=>{
                if(task.taskId == taskId){
                    task.status = status
                }
                
            })
        }else{   
            newToggles[board].push({
                status,
                taskId
            })
        }
        


        setEditToggle(newToggles)
    }


    
    

    
    const handleAddToggle = (status:KanbanToggle, board?:KanbanBoardType)=>{

        if(board){
            let newToggles = {...addToggle}
            newToggles[board] = status

            setAddToggle(newToggles)
        }
        
    }

    const editTask = (board:KanbanBoardType, taskTitle:string, taskId:string) =>{
        let newKanban = {...kanban}

        
        newKanban[board].tasks.map(task=>{
            if(task.taskId == taskId){
                task.taskTitle = taskTitle
            }

        })

        setKanban(newKanban)
    }

    const addTask = (board:KanbanBoardType, taskTitle:string)=>{
        
        let newKanban = {...kanban}
        const taskId = uuidv4()

        newKanban[board].tasks.push({
            taskId,
            taskTitle
        })

        setKanban(newKanban)

        let newToggles = {...editToogle}


        
        newToggles[board].push({
            status:"",
            taskId
        })

    }


    const removeTask = (board:KanbanBoardType, taskId:string)=>{
        let newKanban = {...kanban}
        let newEditToggle = {...editToogle}
        
        newKanban[board].tasks = newKanban[board].tasks.filter((task)=>task.taskId != taskId)
        setKanban(newKanban)

        newEditToggle[board] = editToogle[board].filter(task=>{
            return task.taskId !== taskId
        })


        setEditToggle(newEditToggle)
        
        
    }



    useEffect(()=>{
        console.log(kanban)
        console.log(addToggle)
        console.log(editToogle)
    },[addToggle, kanban, editToogle])


    return (
        <KanbanContext.Provider value={{
            handleAddToggle,
            removeTask,
            handleEditTask,
            kanbanData:kanban,
            addTask,
            editTask,
            addToggle,
            editToogle
        }}>

            {children}

        </KanbanContext.Provider>
    )
}