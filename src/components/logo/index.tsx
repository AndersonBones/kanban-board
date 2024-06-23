import { Comfortaa } from "next/font/google";
import { KanbanLogo } from "./styles";
import { ReactNode } from "react";
import React from "react";


const comfortaa = Comfortaa({ subsets: ["latin"], weight: "400"})

export class Logo extends React.Component{

    render(): ReactNode {
        return (
            <KanbanLogo>
                <h1 className={comfortaa.className} >Kanban</h1>
            </KanbanLogo>
        )
    }
    
}