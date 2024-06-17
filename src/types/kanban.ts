import { ReactNode } from "react"

export interface KanbanBoardColors{
    color: "$linkedinBlue" | "$green" | "$yellow" | "$skyBlue"
}


export interface KanbanBoardType{
    board: "Backlog" | "inDev" | "inQA" | "Completed"
}
export interface KanbanBoardInterface{
    id: KanbanBoardType 
    tasks:KanbanTask[]
}

export interface KanbanTask{
    cardId:string
    taskName:string
}


export interface KanbanData{
    Backlog:KanbanBoardInterface
    inDev:KanbanBoardInterface
    inQA:KanbanBoardInterface
    Completed:KanbanBoardInterface
}

export interface KanbanContextProps{
    kanbanData:KanbanData
    handleAddTask: (board:KanbanBoardType, taskName:string)=>void
}

export interface KanbanContextInterface{
    children:ReactNode
}