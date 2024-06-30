import { ReactNode } from "react"


export type KanbanBoardColors = "$linkedinBlue" | "$green" | "$yellow" | "$skyBlue"
export type KanbanBoardType = "Backlog" | "inDev" | "inQA" | "Completed"


export interface TaskInterface {
    title?: string
    taskId: string
    board: KanbanBoardType
}


export interface KanbanBoardInterface{
    id: KanbanBoardType 
    tasks:KanbanTask[]
}

export interface KanbanTask{
    taskId:string
    taskTitle:string
}

export type KanbanToggle = "active" | ""

export interface AddToggleInterface{
    Backlog:KanbanToggle
    inDev:KanbanToggle
    inQA:KanbanToggle
    Completed:KanbanToggle
}

interface EditTaskInterface{
    taskId:string
    status:KanbanToggle
}
export interface EditToggleInterface{
    Backlog:EditTaskInterface[]
    inDev:EditTaskInterface[]
    inQA:EditTaskInterface[]
    Completed:EditTaskInterface[]
}


export interface KanbanData{
    Backlog:KanbanBoardInterface
    inDev:KanbanBoardInterface
    inQA:KanbanBoardInterface
    Completed:KanbanBoardInterface
}

export interface KanbanContextProps{
    kanbanData:KanbanData
    editToogle:EditToggleInterface
    addToggle:AddToggleInterface
    addTask:(board:KanbanBoardType, taskTitle:string)=>void
    editTask:(board:KanbanBoardType, taskTitle:string, taskId:string)=>void
    removeTask: (board:KanbanBoardType, taskId:string)=>void
    handleEditTask:(board:KanbanBoardType, status:KanbanToggle, taskId:string)=>void
    handleAddToggle: (status:KanbanToggle, board?:KanbanBoardType)=>void
}

export interface KanbanContextInterface{
    children:ReactNode
}
