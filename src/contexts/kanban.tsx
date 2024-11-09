
import { BoardClientSchema, BoardSchema, KanbanContextInterface, KanbanContextProps, TaskClientSchema, Toggle } from "@/types/kanban";
import { createContext, useState } from "react";





export const KanbanContext = createContext({} as KanbanContextProps)

export const KanbanContextProvider = ({ children }: KanbanContextInterface) => {

 
    const [kanbanBoards, setKanbanBoards] = useState<BoardClientSchema[]>([])



    const handleKanban = async (boards: BoardSchema[]) => {

        setKanbanBoards(data => {

            return boards.map((board, index) => {
                return {
                    board_title: boards[index].board_title,
                    color: boards[index].color,
                    id: boards[index].id,
                    status: "",
                    tasks: board.tasks.map((task, index): TaskClientSchema => {
                        return {
                            id: task.id,
                            status: "",
                            title: task.title,
                            board_id: task.board_id
                        }
                    })
                }
            })
        })

    }


    const addBoard = async (board_id: string, title: string, color: string, user_id: string) => {


        setKanbanBoards([...kanbanBoards, {

            board_title: title,
            color,
            id: board_id,
            status: "",
            tasks: []
        }])
    }

    const handleAddToggle = (status: Toggle, board_id?: String) => {

        if (board_id) {
            let newToggles = [...kanbanBoards]


            newToggles.filter(boardType => boardType.id == board_id)[0].status = status

            setKanbanBoards(newToggles)
        }

    }

    const updateBoard = (board_id:string, board_title:string, color:string)=>{
        let newToggles = [...kanbanBoards]


        newToggles.filter(boardType => boardType.id == board_id)[0].color = color

        newToggles.filter(boardType => boardType.id == board_id)[0].board_title = board_title


        setKanbanBoards(newToggles)
    }

    const deleteBoard = (board_id:string)=>{
        let newToggles = kanbanBoards.filter(board => board.id != board_id)

        setKanbanBoards(newToggles)


    }


    const addTask = async (task_id: string, board_id: string, task_title: string) => {

        let newKanban = [...kanbanBoards]

        newKanban.filter(boardType => boardType.id == board_id)[0].tasks.push({
            board_id,
            status: "",
            id: task_id,
            title: task_title
        })


        setKanbanBoards(newKanban)

    }

    const handleEditTask = (board_id: String, status: Toggle, taskId: string) => {

        let newToggles = [...kanbanBoards]


        newToggles.filter(boardType => boardType.id == board_id)[0].tasks.map(task => {
            if (task.id == taskId) {
                task.status = status
            }
        })


        setKanbanBoards(newToggles)
    }

    const editTask = async (board_id: String, task_title: string, task_id: string) => {


        let newKanban = [...kanbanBoards]

        newKanban.filter(boardType => boardType.id == board_id)[0].tasks.map(editTask => {
            if (editTask.id == task_id) {
                editTask.title = task_title
            }
        })

        setKanbanBoards(newKanban)


    }





    const removeTask = async (board_id: string, task_id: string) => {
        let newKanban = [...kanbanBoards]

        const updatedTasks = newKanban.filter(boardType => boardType.id == board_id)[0].tasks.filter(task=> task.id != task_id)



       newKanban.filter(board=>board.id == board_id)[0].tasks = updatedTasks

        setKanbanBoards(newKanban)

    }



    return (
        <KanbanContext.Provider value={{
            addBoard,
            handleKanban,
            handleAddToggle,
            updateBoard,
            deleteBoard,
            removeTask,
            handleEditTask,
            kanbanBoards,
            addTask,
            editTask,
        }}>

            {children}

        </KanbanContext.Provider>
    )
}