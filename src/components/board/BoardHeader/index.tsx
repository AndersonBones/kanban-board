
import { ReactNode } from "react";

import { DeleteBoard, KanbanBoardActions, Header, UpdateBoard } from './styles'

import React from "react";
import { AddTask } from "../../task/AddTask";
import { FaPlus } from "react-icons/fa";
import BoardDialog from "../BoardDialog";
import { PencilSimple, Trash } from "phosphor-react";


interface HeaderProps {
    id:string
    board_length:number
    board_title:string
    board_color:string
}

export class BoadHeader extends React.Component<HeaderProps> {

    constructor(props: HeaderProps) {
        super(props)
    }
    render(): ReactNode {

        const {board_length, board_title, id, board_color} = this.props
        return (

            <Header >
           
                <span>({board_length})</span>
                <span>{board_title}</span>
                <KanbanBoardActions>
                    <AddTask board_id={id}><FaPlus size={15}></FaPlus></AddTask>

                    <BoardDialog dialog={true} action="update" board_id={id} board_title={board_title} board_color={board_color} >
                        <UpdateBoard><PencilSimple size={20} /></UpdateBoard>
                    </BoardDialog>

                    <BoardDialog dialog={false} action="delete" board_id={id}>
                        <DeleteBoard ><Trash size={20} /></DeleteBoard>
                    </BoardDialog>


                </KanbanBoardActions>
            </Header>



        )
    }

}