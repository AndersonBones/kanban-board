import { ReactNode } from "react";
import { KanbanBoard } from "./styles";
import { KanbanBoardColors } from "@/types/kanban";
import React from "react";


interface KanbanBoardProps{
    children:ReactNode
    color: KanbanBoardColors
}

export class KanbanBoardComponent extends React.Component<KanbanBoardProps>{

    constructor({color, children}:KanbanBoardProps){
        super({color, children})
    }
    render(): ReactNode {
        return(
            <KanbanBoard css={{backgroundColor:this.props.color}} >
                {this.props.children}
                
            </KanbanBoard>
        )
    }
    
}