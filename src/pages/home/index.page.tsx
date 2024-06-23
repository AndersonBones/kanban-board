import {Task} from "@/components/task";
import { TaskList, KanbanArea, KanbanContainer, KanbanHeader, KanbanHeaderTitle } from "./styles";
import { FaPlus  } from "react-icons/fa";
import { AddTask } from "@/components/AddTask";

import { KanbanBoardComponent } from "@/components/KanbanBoard";
import {KanbanBoadHeaderComponent} from "@/components/KanbanBoardHeader";
import {KanbanLogoutComponent} from "@/components/KanbanLogout";
import { useContext, useRef } from "react";
import { KanbanContext } from "@/contexts/kanban";
import TaskDialog  from "@/components/taskDialog";
import { UUID } from "crypto";




export default function Home(){

    const {kanbanData} = useContext(KanbanContext)


    return(
        <KanbanContainer >
           
            <KanbanHeader>
                <KanbanHeaderTitle>

                    <h1>Kanban</h1>
                    <p>manage your projects your way</p>
                    
                </KanbanHeaderTitle>

                <KanbanLogoutComponent/>
                


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
                                if(task.taskName){
                                    return (
                                        <Task key={task.TaskId} board="Backlog" taskId={task.TaskId} title={task.taskName}></Task>
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
                                if(task.taskName){
                                    return (
                                        <Task key={task.TaskId} board="inDev" taskId={task.TaskId} title={task.taskName}></Task>
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
                                if(task.taskName){
                                    return(
                                        <Task key={task.TaskId} board="inQA" taskId={task.TaskId} title={task.taskName}></Task>
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

                                if(task.taskName){
                                    return (
                                        <Task key={task.TaskId} title={task.taskName} board={kanbanData.Completed.id} taskId={task.TaskId}></Task>
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