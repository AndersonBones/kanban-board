
import { ReactNode } from "react";

import {KanbanBoardHeader} from './styles'

import React from "react";


interface KanbanHeaderProps{
    children:ReactNode

}

export class KanbanBoadHeaderComponent extends React.Component<KanbanHeaderProps>{

    constructor(props:KanbanHeaderProps){
        super(props)
    }
    render(): ReactNode {
        return (

            <KanbanBoardHeader >
                {this.props.children}
            </KanbanBoardHeader>
        
            
            
        )
    }
    
}