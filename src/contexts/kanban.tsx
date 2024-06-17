import { KanbanBoardType, KanbanContextInterface, KanbanContextProps, KanbanData } from "@/types/kanban";
import { createContext, useEffect, useState } from "react";

import { v4 as uuidv4 } from 'uuid';




export const KanbanContext = createContext({} as KanbanContextProps)

export const KanbanContextProvider = ({children}:KanbanContextInterface)=>{

    const [kanban, setTask] = useState<KanbanData>(
        {
            Backlog:{
                id:{board:"Backlog"},
                tasks:[{
                    cardId:uuidv4(),
                    taskName:"task1"
                }]
            },
            inDev:{
                id:{board:"inDev"},
                tasks:[{
                    cardId:uuidv4(),
                    taskName:"task1"
                }]
            },
            inQA:{
                id:{board:"inQA"},
                tasks:[{
                    cardId:uuidv4(),
                    taskName:"task1"
                }]
            },
            Completed:{
                id:{board:"Completed"},
                tasks:[{
                    cardId:uuidv4(),
                    taskName:"task1"
                }]
            }
        })

    const handleAddTask = ({board}:KanbanBoardType, taskName:string)=>{
        
        let newKanban = {...kanban}
        newKanban[board].tasks.push({
            cardId:uuidv4(),
            taskName
        })

        setTask(newKanban)

    }



    return (
        <KanbanContext.Provider value={{
            kanbanData:kanban,
            handleAddTask
        }}>

            {children}

        </KanbanContext.Provider>
    )
}