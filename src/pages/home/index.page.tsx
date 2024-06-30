
import {Task} from "@/components/task";
import {KanbanArea, KanbanContainer, KanbanHeader, KanbanHeaderTitle } from "./styles";
import { FaPlus  } from "react-icons/fa";
import { AddTask } from "@/components/AddTask";

import { KanbanBoardComponent } from "@/components/KanbanBoard";
import {KanbanBoadHeaderComponent} from "@/components/KanbanBoardHeader";
import {KanbanLogoutComponent} from "@/components/KanbanLogout";
import { useContext, useRef, useState } from "react";
import { KanbanContext } from "@/contexts/kanban";
import TaskDialog  from "@/components/addTaskDialog";
import { v4 as uuidv4 } from 'uuid';
import { useSession } from "next-auth/react";

import { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType, NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import auth, { buildNextAuthOptions } from "../api/auth/[...nextauth].api";

import userIcon from '../../assets/user.png'
import TaskList from "@/components/taskList";


interface user{
    email:string
    image:string
    username:string
}

interface SessionProps{
    expires:string
    user:user
    status: "authenticated" | "unauthenticated"
}



export default function Home(){

    const {kanbanData} = useContext(KanbanContext)
    const session = useSession()

   
    const user = {
        username:session.data?.user?.name ? session.data?.user?.name : "undefined",
        image:session.data?.user?.image ? session.data?.user?.image : userIcon.src,
        email:session.data?.user?.email ? session.data?.user?.email : null
    }
    

    return(
        <KanbanContainer >
           
            <KanbanHeader>
                <KanbanHeaderTitle>

                    <h1>Kanban</h1>
                    <p>manage your projects your way</p>
                    
                </KanbanHeaderTitle>

                <KanbanLogoutComponent username={user.username} image={user.image}/>
                


            </KanbanHeader>

            <KanbanArea>

                <KanbanBoardComponent color="$linkedinBlue" key={kanbanData.Backlog.id}>
                    <KanbanBoadHeaderComponent >
                        
                        <span>({kanbanData.Backlog.tasks.length}) Backlog</span>
                        <AddTask kanbanBoard="Backlog"><FaPlus size={15}></FaPlus>Add</AddTask>
                        
                       
                    </KanbanBoadHeaderComponent>

                    <TaskList>
                        {
                            kanbanData.Backlog.tasks.map((task)=>{
                                if(task.taskTitle){
                                    const title = task.taskTitle
                                    return (
                                        
                                        <Task key={task.taskId} board="Backlog" taskId={task.taskId} title={title}/>
                                        
                                    )
                                }
                                
                            })
                        }


                    </TaskList>

                    <TaskDialog board="Backlog" ></TaskDialog>

                    
                </KanbanBoardComponent>

                <KanbanBoardComponent color="$green" key={kanbanData.inDev.id}>
                    <KanbanBoadHeaderComponent >
                        
                        <span>({kanbanData.inDev.tasks.length}) Development</span>
                        <AddTask kanbanBoard="inDev"><FaPlus size={15}></FaPlus>Add</AddTask>
                        
                       
                    </KanbanBoadHeaderComponent>

                    <TaskList>

                        {
                            kanbanData.inDev.tasks.map((task)=>{
                                if(task.taskTitle){
                                    return (
                                        
                                        <Task key={task.taskId} board="inDev" taskId={task.taskId} title={task.taskTitle}></Task>
                                            
                                        
                                        
                                    )
                                }
                                
                            })
                        }
                        
                    </TaskList>

                    <TaskDialog  board="inDev"></TaskDialog>
                    
                </KanbanBoardComponent>

                <KanbanBoardComponent color="$yellow" key={kanbanData.inQA.id}>
                    <KanbanBoadHeaderComponent >
                        
                        <span>({kanbanData.inQA.tasks.length}) In QA</span>
                        <AddTask kanbanBoard="inQA"><FaPlus size={15}></FaPlus>Add</AddTask>
                        
                       
                    </KanbanBoadHeaderComponent>

                    <TaskList>
                        {
                            kanbanData.inQA.tasks.map((task)=>{
                                if(task.taskTitle){
                                    return(
                                        
                                        <Task key={task.taskId} board="inQA" taskId={task.taskId} title={task.taskTitle}></Task>
                                       
                                        
                                    )
                                }   
                                
                            })
                        }
                        
                    </TaskList>

                    <TaskDialog  board="inQA"></TaskDialog>
                    
                </KanbanBoardComponent>

                <KanbanBoardComponent color="$skyBlue" key={kanbanData.Completed.id}>
                    <KanbanBoadHeaderComponent>
                        
                        <span>({kanbanData.Completed.tasks.length}) Completed</span>
                        <AddTask kanbanBoard="Completed"><FaPlus size={15}></FaPlus>Add</AddTask>
                        
                       
                    </KanbanBoadHeaderComponent>

                    <TaskList>
                        {
                            
                            kanbanData.Completed.tasks.map((task)=>{

                                if(task.taskTitle){
                                    return (
                                    
                                        <Task key={task.taskId} title={task.taskTitle} board={kanbanData.Completed.id} taskId={task.taskId}></Task>

                                       
                                    )
                                }
                                
                            })
                            
                        }


                    </TaskList>
                    <TaskDialog  board="Completed"></TaskDialog>
                    
                </KanbanBoardComponent>

            </KanbanArea>


         
            
        </KanbanContainer>
    )
}



export const getServerSideProps:GetServerSideProps = async (context:GetServerSidePropsContext)=>{

    const session = await getServerSession(context.req, context.res, buildNextAuthOptions(context.req, context.res))

    
    if(!session){
        return {
            redirect:{
                destination:"/auth/login",
                permanent:false,
            },
        }
    }


    return {
        props:{
            session
        },
    }
}