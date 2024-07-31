import { ReactNode } from "react";
import { KanbanBoard } from "./styles";

import React from "react";
import { DroppableProvided } from "@hello-pangea/dnd";


interface KanbanBoardProps{
    children:ReactNode
    color: string
    inner: DroppableProvided
}

export class KanbanBoardComponent extends React.Component<KanbanBoardProps>{

    constructor(props:KanbanBoardProps){
        super(props)
    }
    render(): ReactNode {
        return(
            <KanbanBoard ref={this.props.inner.innerRef} css={{backgroundColor:this.props.color}} >
                {this.props.children}
                
            </KanbanBoard>
        )
    }
    
}