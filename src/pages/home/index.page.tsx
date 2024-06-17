import Card from "@/components/card";
import { CardList, KanbanArea, KanbanContainer, KanbanHeader, KanbanHeaderTitle } from "./styles";
import { FaPlus  } from "react-icons/fa";
import AddCard from "@/components/AddCard";

import {Roboto} from 'next/font/google'
import KanbanBoardComponent from "@/components/KanbanBoard";
import KanbanBoadHeaderComponent from "@/components/KanbanBoardHeader";
import KanbanLogoutComponent from "@/components/KanbanLogout";
import { useContext } from "react";
import { KanbanContext } from "@/contexts/kanban";
import TaskDialog from "@/components/taskDialog";




export default function Home(){

    const {kanbanData} = useContext(KanbanContext)

    return(
        <KanbanContainer >
           
            <KanbanHeader>
                <KanbanHeaderTitle>

                    <h1>KANBAN BOARD</h1>
                    <p>manage your projects your way</p>
                    
                </KanbanHeaderTitle>

                <KanbanLogoutComponent/>
                


            </KanbanHeader>

            <KanbanArea>

                <KanbanBoardComponent bg={{color: "$linkedinBlue"}} key={kanbanData.Backlog.id.board}>
                    <KanbanBoadHeaderComponent >
                        
                        <span>({kanbanData.Backlog.tasks.length}) Backlog</span>
                        <AddCard kanbanBoard={{board:"Backlog"}}><FaPlus size={15}></FaPlus>Add</AddCard>
                        
                       
                    </KanbanBoadHeaderComponent>

                    <CardList>
                        {
                            kanbanData.Backlog.tasks.map((task)=>{
                                return (
                                    <Card key={task.cardId} bg={{color: "$linkedinBlue"}} title={task.taskName}></Card>
                                )
                            })
                        }


                    </CardList>

                    <TaskDialog></TaskDialog>
                    
                </KanbanBoardComponent>

                <KanbanBoardComponent bg={{color: "$green"}} key={kanbanData.inDev.id.board}>
                    <KanbanBoadHeaderComponent >
                        
                        <span>({kanbanData.inDev.tasks.length}) Development</span>
                        <AddCard kanbanBoard={{board:"inDev"}}><FaPlus size={15}></FaPlus>Add</AddCard>
                        
                       
                    </KanbanBoadHeaderComponent>

                    <CardList>

                        {
                            kanbanData.inDev.tasks.map((task)=>{
                                return (
                                    <Card bg={{color: "$green"}} title={task.taskName}></Card>
                                )
                            })
                        }
                        
                    </CardList>

                    <TaskDialog></TaskDialog>
                    
                </KanbanBoardComponent>

                <KanbanBoardComponent bg={{color: "$yellow"}} key={kanbanData.inQA.id.board}>
                    <KanbanBoadHeaderComponent >
                        
                        <span>({kanbanData.inQA.tasks.length}) In QA</span>
                        <AddCard kanbanBoard={{board:"inQA"}}><FaPlus size={15}></FaPlus>Add</AddCard>
                        
                       
                    </KanbanBoadHeaderComponent>

                    <CardList>
                        {
                            kanbanData.inQA.tasks.map((task)=>{
                                return(
                                    <Card bg={{color: "$yellow"}} title={task.taskName}></Card>
                                )
                            })
                        }
                        
                    </CardList>

                    <TaskDialog></TaskDialog>
                    
                </KanbanBoardComponent>

                <KanbanBoardComponent bg={{color: "$skyBlue"}} key={kanbanData.Completed.id.board}>
                    <KanbanBoadHeaderComponent>
                        
                        <span>({kanbanData.Completed.tasks.length}) Completed</span>
                        <AddCard kanbanBoard={{board:"Completed"}}><FaPlus size={15}></FaPlus>Add</AddCard>
                        
                       
                    </KanbanBoadHeaderComponent>

                    <CardList>
                        {
                            kanbanData.Completed.tasks.map((task)=>{
                                return (
                                    <Card bg={{color: "$skyBlue"}} title={task.taskName}></Card>
                                )
                            })
                        }
                        
                    </CardList>
                    
                    
                </KanbanBoardComponent>

            </KanbanArea>
            
        </KanbanContainer>
    )
}