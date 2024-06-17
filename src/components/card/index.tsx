import { KanbanBoardColors } from "@/types/kanban";
import { KanbanCard, KanbanCardActions, TaskNameArea } from "./styles";
import { Trash, NotePencil } from "phosphor-react";
interface CardInterface {
    title: string
    bg: KanbanBoardColors
}
export default function Card({ title, bg }: CardInterface) {
    return (
        <KanbanCard >

            <TaskNameArea>

                <p>
                    {title}
                </p>
            </TaskNameArea>


            <KanbanCardActions>

                <button><Trash size={20} /></button>
                <button><NotePencil size={20} /></button>
            </KanbanCardActions>
        </KanbanCard>
    )
}