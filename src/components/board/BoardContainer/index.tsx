import { ReactNode } from "react";
import {  Board } from "./styles";

import React from "react";
import { DroppableProvided } from "@hello-pangea/dnd";
import { PencilSimple, Trash } from "phosphor-react";


interface KanbanBoardProps{
    children:ReactNode
    color: string
    inner: DroppableProvided

}

export class BoardContainer extends React.Component<KanbanBoardProps>{

    constructor(props:KanbanBoardProps){
        super(props)
    }
    render(): ReactNode {
        return(
            <Board ref={this.props.inner.innerRef} css={{backgroundColor:this.props.color}} >
                {this.props.children}
         
            </Board>
        )
    }
    
}