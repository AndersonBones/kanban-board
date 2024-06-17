import { Button, Dialog, Flex, TextField, Text} from "@radix-ui/themes";
import { TaskForm, TaskFormActions, TaskFormSubmit } from "./styles";


export default function TaskDialog() {
    return (
       <TaskForm>
            <label htmlFor="taskName">Task Title*</label>
            <input type="text" id="taskName" />

            <TaskFormActions>
                <TaskFormSubmit type="submit">Submit</TaskFormSubmit>
                <button type="button">Cancel</button>
            </TaskFormActions>
       </TaskForm>
    )
}