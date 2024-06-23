import { ReactNode } from "react"


export type KanbanBoardColors = "$linkedinBlue" | "$green" | "$yellow" | "$skyBlue"
export type KanbanBoardType = "Backlog" | "inDev" | "inQA" | "Completed"

export interface KanbanBoardInterface{
    id: KanbanBoardType 
    tasks:KanbanTask[]
}

export interface KanbanTask{
    TaskId:string
    taskName:string
}

export type KanbanToggle = "active" | ""

export interface TogglesInterface{
    Backlog:KanbanToggle
    inDev:KanbanToggle
    inQA:KanbanToggle
    Completed:KanbanToggle
}


export interface KanbanData{
    Backlog:KanbanBoardInterface
    inDev:KanbanBoardInterface
    inQA:KanbanBoardInterface
    Completed:KanbanBoardInterface
}

export interface KanbanContextProps{
    kanbanData:KanbanData
    toggles:TogglesInterface
    handleRemoveTask: (board:KanbanBoardType, taskId:string)=>void
    handleAddTask: (board:KanbanBoardType, taskName:string)=>void
    handleToggle: (status:KanbanToggle, board?:KanbanBoardType)=>void
}

export interface KanbanContextInterface{
    children:ReactNode
}