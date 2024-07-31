import { keyframes, styled } from "@/styles";

import { AddButton, ColorPickerButton, InputBoard, InputBoardActions } from "./styles";
import * as Dialog from '@radix-ui/react-dialog';
import { blackA } from '@radix-ui/colors';
import { FaPlus } from "react-icons/fa";
import ColorPicker from "../ColorPicker";
import { useContext, useEffect, useState } from "react";
import { KanbanContext } from "@/contexts/kanban";
import { Toggle, SessionProps } from "@/types/kanban";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "next-auth/react";



const inputBoardSchema = z.object({
    title: z.string()
        .max(100, { message: "number of characters has been exceeded!" })
        .nonempty("Task name is required!")
})

import { v4 as uuidv4 } from 'uuid';
import { clientAxios } from "@/lib/axios";
import { AxiosError } from "axios";

type InputBoardDialog = z.infer<typeof inputBoardSchema>


export default function InputBoardDialog() {


    const { color, setColor, addBoard } = useContext(KanbanContext)
    const [statusColorPicker, setStatusColorPicker] = useState<Toggle>("")

    const session = useSession()
    const userSession = session.data as SessionProps


    const handleToggleColor = () => {
        setStatusColorPicker(value => {
            if (value) {
                return ""
            } else {
                return "active"
            }
        })
    }

    const { handleSubmit, register, reset, formState:{errors}} = useForm<InputBoardDialog>({
        resolver: zodResolver(inputBoardSchema)
    })


    const handleAddBoard = async (data: InputBoardDialog) => {



        try {

            const response = await clientAxios.post('/board', {
                user_id: userSession.user.id,
                board_title: data.title,
                color: color.hex
            })

            const { board, status, msg } = response.data



            addBoard(board.id, board.board_title, board.color, board.user_id)
            reset()



        } catch (error) {

            if (error instanceof AxiosError) {
                
                alert(error?.response?.data?.message)
                return
            }

        }


    }

    return (

        <Dialog.Root>
            <Dialog.Trigger asChild>
                <AddButton><FaPlus size={20} /> Add board</AddButton>
            </Dialog.Trigger>

            <Dialog.Portal>

                <DialogOverlay />

                <DialogContent>
                    <InputBoard onSubmit={handleSubmit(handleAddBoard)} className="form_dialog">

                        <ColorPicker status={statusColorPicker} />
                        <Dialog.DialogTitle>Board title</Dialog.DialogTitle>
                        <input autoComplete="off" {...register("title")} required type="text" id="board_title" placeholder="Board title" />

                        <InputBoardActions className="form_actions">

                            <div>

                                <button className="submit_button" type="submit">Submit</button>
                                <Dialog.Close asChild>
                                    <button type="button">Exit</button>
                                </Dialog.Close>
                            </div>



                            <ColorPickerButton type="button" onClick={handleToggleColor} css={{ background: color.hex }}>{color.hex}</ColorPickerButton>
                        </InputBoardActions>
                    </InputBoard>
                </DialogContent>

            </Dialog.Portal>
        </Dialog.Root>



    )
}


const overlayShow = keyframes({
    '0%': { opacity: 0 },
    '100%': { opacity: 1 },
});

const contentShow = keyframes({
    '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
    '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
});

const DialogOverlay = styled(Dialog.Overlay, {
    backgroundColor: blackA.blackA6,
    position: 'fixed',
    inset: 0,
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
});

const DialogContent = styled(Dialog.Content, {

    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90vw',
    maxWidth: '450px',
    maxHeight: '85vh',

    animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
    '&:focus': { outline: 'none' },
});

