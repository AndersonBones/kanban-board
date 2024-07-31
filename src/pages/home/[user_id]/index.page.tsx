

import { DragTask, Kanban, KanbanArea, KanbanContainer, KanbanHeader, KanbanMenu, KanbanTitle } from "./styles";
import { FaPlus } from "react-icons/fa";
import { AddTask } from "@/components/AddTask";

import { KanbanBoardComponent } from "@/components/KanbanBoard";
import { KanbanBoadHeaderComponent } from "@/components/KanbanBoardHeader";
import { KanbanLogoutComponent } from "@/components/KanbanLogout";
import { useContext, useEffect } from "react";
import { KanbanContext } from "@/contexts/kanban";
import TaskDialog from "@/components/addTaskDialog";
import { DragDropContext, Draggable, Droppable } from '@hello-pangea/dnd'


import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { getServerSession } from "next-auth";
import { buildNextAuthOptions } from "../../api/auth/[...nextauth].api";


import TaskList from "@/components/taskList";

import InputBoardDialog from "@/components/inputBoardDialog";


import "react-color-palette/css";
import { serverAxios } from "@/lib/axios";
import { UserSchema, SessionProps } from "@/types/kanban";
import Task from "@/components/task";





export default function Home({ avatar_url, boards, name }: UserSchema) {

    const { handleKanban, kanbanBoards } = useContext(KanbanContext)

    useEffect(()=>{
        handleKanban(boards)
        
    },[])
    
    
    const endDrag = (result: any) => {


    }



    return (
        <KanbanContainer >

            <KanbanMenu>

                <KanbanLogoutComponent username={name} image={avatar_url} />

            </KanbanMenu>


            <Kanban>
                <KanbanHeader>

                    <KanbanTitle>
                        <h1>Kanban</h1>
                        <p>manage your projects your way</p>
                    </KanbanTitle>


                    <InputBoardDialog />

                </KanbanHeader>

                <DragDropContext onDragEnd={endDrag}>
                    <KanbanArea className={kanbanBoards.length == 0 ? "empty" : ""} >

                        {kanbanBoards.length == 0 && (
                            <span className="empty-msg">Board is empty!</span>
                        )}
                        {kanbanBoards.map((board) => {
                            return (

                                <Droppable key={board.id} droppableId={board.id}>
                                    {(provided) => (
                                        <KanbanBoardComponent {...provided.droppableProps} inner={provided} color={board.color} key={board.id}  >
                                            <KanbanBoadHeaderComponent >

                                                <span>({board.tasks.length}) {board.board_title}</span>
                                                <AddTask board_id={board.id}><FaPlus size={15}></FaPlus>Add</AddTask>


                                            </KanbanBoadHeaderComponent>

                                            <TaskList >
                                                {
                                                    board.tasks.map((task, index) => {
                                                        if (task.title) {

                                                            return (

                                                                <Draggable key={task.id} draggableId={task.id} index={index}>
                                                                    {(provided, snapshot) => (
                                                                        <DragTask key={task.id} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} >
                                                                            <Task key={task.id} board_id={board.id} task_id={task.id} status={task.status} title={task.title} />
                                                                        </DragTask>
                                                                    )}

                                                                </Draggable>


                                                            )
                                                        }

                                                    })
                                                }
                                                {provided.placeholder}


                                            </TaskList>

                                            <TaskDialog board_id={board.id} ></TaskDialog>


                                        </KanbanBoardComponent>


                                    )}

                                </Droppable>

                            )
                        })}
                    </KanbanArea>

                </DragDropContext>

            </Kanban>



        </KanbanContainer>
    )
}



export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {


    const session = await getServerSession(context.req, context.res, buildNextAuthOptions(context.req, context.res)) as SessionProps


    const { user_id } = context.query


    if (!session) {
        return {
            redirect: {
                destination: "/auth/login",
                permanent: false,
            },
        }
    }

    const AuthenticatedData = await serverAxios.get(`/user/${user_id}`)



    const { user } = AuthenticatedData.data

    // if(!user){
    //     return {
    //         props:{

    //         }
    //     }
    // }
    return {
        props: {
            expires: session.expires,
            id: user.id,
            name: user.name,
            email: user.email,
            avatar_url: user.avatar_url,
            boards: user.boards,

        },
    }
}