import { keyframes, styled } from "@/styles";

import { CancelButton, ColorPicker, ColorPickerButton, ConfirmButton, DeleteDialog, DeleteDialogActions, DeleteDialogMessage, InputBoard, InputBoardActions, SubmitBoardTitle } from "./styles";
import * as Dialog from '@radix-ui/react-dialog';

import { blackA } from '@radix-ui/colors';

import { BsExclamationCircle } from "react-icons/bs";

import { useContext, useEffect, useState } from "react";
import { KanbanContext } from "@/contexts/kanban";
import { Toggle, SessionProps, BoardDialogAction } from "@/types/kanban";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "next-auth/react";

import { clientAxios } from "@/lib/axios";
import { AxiosError } from "axios";

import Colorful from '@uiw/react-color-colorful';
import { hsvaToHex, hexToHsva, HsvaColor } from '@uiw/color-convert';
import ErrorMessage from "@/components/ErrorMessage/index.page";




const inputBoardSchema = z.object({
    title: z.string()
        .max(20, { message: "number of characters has been exceeded!" })
        .nonempty("Task name is required!").optional()
})

type InputBoardDialog = z.infer<typeof inputBoardSchema>

interface InputBoardDialogProps {
    children: React.ReactNode
    action: BoardDialogAction
    board_id?: string
    dialog: boolean
    board_title?: string
    board_color?: string
}

export default function BoardDialog({ children, action, board_id, dialog, board_title, board_color }: InputBoardDialogProps) {


    const {  addBoard, updateBoard, deleteBoard } = useContext(KanbanContext)
    const [statusColorPicker, setStatusColorPicker] = useState<Toggle>("")
    const [open, setOpen] = useState(false)

    const [hsva, setHsva] = useState<HsvaColor>(hexToHsva(String(board_color)))



    const session = useSession()
    const userSession = session.data as SessionProps


    const handleToggleColor = () => {
        setStatusColorPicker(value => {
            return value ? "" : "active"
        })
    }

    const { handleSubmit, register, reset, formState: { errors } } = useForm<InputBoardDialog>({
        resolver: zodResolver(inputBoardSchema)
    })



    const handleUpdateBoard = async (data: InputBoardDialog) => {
        try {

            const response = await clientAxios.put('/board/update', {
                id: board_id,
                board_title: data.title,
                color: hsvaToHex(hsva)
            })

            const { board, status } = response.data



            updateBoard(board.id, board.board_title, board.color)
            reset()



        } catch (error) {

            if (error instanceof AxiosError) {

                alert(error?.response?.data?.message)
                return
            }

        }
    }


    const handleDeleteBoard = async () => {



        try {

            const response = await clientAxios.delete('/board/delete', {
                data: {
                    id: board_id
                }
            })

            const { board, status } = response.data


            deleteBoard(board.id)

            reset()





        } catch (error) {

            if (error instanceof AxiosError) {

                alert(error?.response?.data?.message)
                return
            }

        }



    }

    const handleAddBoard = async (data: InputBoardDialog) => {

        try {

            const response = await clientAxios.post('/board/add', {
                user_id: userSession.user.id,
                board_title: data.title,
                color: hsvaToHex(hsva)
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

   

    const handleBoard = async (data: InputBoardDialog) => {

        
        switch (action) {
            case 'add':
                await handleAddBoard(data)
                setOpen(false)
                break;

            case 'update':
                await handleUpdateBoard(data)
                setOpen(false)
                break;

            case 'delete':
                await handleDeleteBoard()
                setOpen(false)
                break;
        }
    }



    const handleCancel = ()=>{
        reset()
    }

    return (


        <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
                {children}
            </Dialog.Trigger>

            <Dialog.Portal >

                <DialogOverlay />

                <DialogContent onInteractOutside={(e) => e.preventDefault()}>

                    {dialog && (
                        <InputBoard onSubmit={handleSubmit(handleBoard)} className="form_dialog">

                            <ColorPicker className={statusColorPicker}>
                                <Colorful  color={hsva} onChange={(color) => {setHsva(color.hsva)}}/>
                            </ColorPicker>

                            

                            <Dialog.DialogTitle>Board title</Dialog.DialogTitle>
                            <input autoFocus={true} autoComplete="off"  {...register("title", {value:board_title})} required type="text" id="board_title" placeholder="Board title" />

                            <ErrorMessage message={errors.title ? String(errors.title.message) : ""}/>
                        
                            <InputBoardActions className="form_actions">

                                <div>

                                    <SubmitBoardTitle className="submit_button" type="submit">Submit</SubmitBoardTitle>
                                    <Dialog.Close asChild onClick={handleCancel}>
                                        <button type="button">Exit</button>
                                    </Dialog.Close>
                                </div>



                                <ColorPickerButton type="button" onClick={handleToggleColor} css={{ background: hsvaToHex(hsva) }}>{hsvaToHex(hsva)}</ColorPickerButton>
                            </InputBoardActions>
                        </InputBoard>
                    )}


                    {!dialog && (
                        <DeleteDialog onSubmit={handleSubmit(handleBoard)}>
                            <DeleteDialogMessage>

                                <i><BsExclamationCircle size={80} /></i>

                                <h1>Are you sure?</h1>
                                <span>You wont be able to revert this!</span>

                            </DeleteDialogMessage>

                            <DeleteDialogActions>

                                <ConfirmButton type="submit">Confirm</ConfirmButton>



                                <Dialog.Close asChild>
                                    <CancelButton >Cancel</CancelButton>
                                </Dialog.Close>

                            </DeleteDialogActions>
                        </DeleteDialog>

                    )}





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
    maxWidth: '500px',
    maxHeight: '85vh',

    animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
    '&:focus': { outline: 'none' },
});



