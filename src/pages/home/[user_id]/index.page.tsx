

import { AddButton, DragTask, Kanban, KanbanArea, KanbanContainer, KanbanHeader, KanbanMenu, KanbanTitle } from "./styles";
import { FaPlus } from "react-icons/fa";




import { KanbanLogoutComponent } from "@/components/kanban/KanbanLogout";
import { useContext, useEffect } from "react";
import { KanbanContext } from "@/contexts/kanban";
import TaskDialog from "@/components/task/AddTaskDialog";
import { DragDropContext, Draggable, Droppable } from '@hello-pangea/dnd'

import { v4 as uuidv4 } from 'uuid';
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { getServerSession } from "next-auth";
import { buildNextAuthOptions } from "../../api/auth/[...nextauth].api";

import TaskList from "@/components/task/TaskList";

import {  serverAxios } from "@/lib/axios";
import { UserSchema, SessionProps } from "@/types/kanban";
import Task from "@/components/task";


import BoardDialog from "@/components/board/BoardDialog";

import KanbanMenuNav from "@/components/kanban/KanbanMenuNav/index.page";
import { BoardContainer } from "@/components/board/BoardContainer";
import { BoadHeader } from "@/components/board/BoardHeader";








export default function Home({ avatar_url, boards, name }: UserSchema) {

    const { handleKanban, kanbanBoards} = useContext(KanbanContext)

    useEffect(()=>{
        handleKanban(boards)
        
    },[])
    
    
    const endDrag = (result: any) => {


    }

    return (
        <KanbanContainer >

            <KanbanMenu>
                
                <KanbanMenuNav/>
                <KanbanLogoutComponent username={name} image={avatar_url} />

            </KanbanMenu>


            <Kanban>
                <KanbanHeader>

                    <KanbanTitle>
                        <h1>Kanban</h1>
                        <p>manage your projects your way</p>
                    </KanbanTitle>


                    <BoardDialog dialog={true} action={"add"} >
                        <AddButton><FaPlus size={18} /> Add board</AddButton>
                    </BoardDialog>

                </KanbanHeader>

                <DragDropContext onDragEnd={endDrag}>
                    <KanbanArea className={kanbanBoards.length == 0 ? "empty" : ""} >

                        {kanbanBoards.length == 0 && (
                            <span className="empty-msg">Board is empty!</span>
                        )}
                        {kanbanBoards.map((board) => {
                            return (

                                <Droppable key={uuidv4()} droppableId={board.id}>
                                    {(provided) => (
                                        <BoardContainer {...provided.droppableProps} inner={provided} color={board.color} key={board.id}  >
                                           
                                            <BoadHeader 
                                                board_color={board.color}
                                                board_length={board.tasks.length}
                                                board_title={board.board_title}
                                                id={board.id}
                                                key={board.id}

                                            />
 

                                            <TaskList key={uuidv4()}>
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

                                            <TaskDialog key={uuidv4()} board_id={board.id} ></TaskDialog>


                                        </BoardContainer>


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