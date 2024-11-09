import { ErrorMessageContainer } from "./styles";

interface ErrorMessageProps{
    message:string
}
export default function ErrorMessage({message}:ErrorMessageProps){

    return (
        <ErrorMessageContainer>
            <span>{message}</span>
        </ErrorMessageContainer>
    )
}