
import { Dispatch, ReactNode, SetStateAction } from "react"




export interface UserSession {
    id: string
    email: string
    avatar_url: string
    name: string
}

export interface SessionProps {
    status: "authenticated" | "loading" | "unauthenticated"
    expires: string
    user: UserSession

}

export type Toggle = "active" | ""
export type BoardDialogAction = "add" | "update" | "delete"

export interface TaskInterface{
    board_id:string
    task_id:string
    title:string
    status?: Toggle
}

export interface UserSchema {
    expires:string
    id:string
    name:string
    email:string    
    avatar_url:string
    boards:BoardSchema[]
}
export interface TaskSchema{
    id:string
    title:string
    board_id?:string
}
export interface BoardSchema{
    id:string
    board_title:string
    color:string
    tasks:TaskSchema[]
}




export interface TaskClientSchema{
    id:string
    title:string
    board_id?:string
    status:Toggle
}
export interface BoardClientSchema{
    id:string
    board_title:string
    color:string
    tasks:TaskClientSchema[]
    status:Toggle
}


export interface KanbanContextProps{
    handleKanban:(boards:BoardSchema[])=>void
    addBoard:(board_id:string, title:string, color:string, user_id:string)=>void
    kanbanBoards:BoardClientSchema[]
    updateBoard:(board_id:string, board_title:string, color:string)=>void
    deleteBoard:(board_id:string)=>void
    addTask:(task_id:string, board_id:string, taskTitle:string)=>void
    editTask:(board_id:string, taskTitle:string, taskId:string)=>void
    removeTask: (board_id:string, taskId:string)=>void
    handleEditTask:(board_id:string, status:Toggle, taskId:string)=>void
    handleAddToggle: (status:Toggle, board_id?:string)=>void

}

export interface KanbanContextInterface{
    children:ReactNode
}
