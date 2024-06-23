
import { ReactNode } from "react";

import {KanbanBoardHeader} from './styles'
import { KanbanBoardColors } from "@/types/kanban";
import React from "react";


interface KanbanHeaderProps{
    children:ReactNode

}

export class KanbanBoadHeaderComponent extends React.Component<KanbanHeaderProps>{

    constructor({children}:KanbanHeaderProps){
        super({children})
    }
    render(): ReactNode {
        return (

            <KanbanBoardHeader >
                {this.props.children}
            </KanbanBoardHeader>
        
            
            
        )
    }
    
}