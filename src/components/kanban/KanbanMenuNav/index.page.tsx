import { Logo } from "../Logo";
import { Nav } from "./styles";

export default function KanbanMenuNav(){
    return (
        <Nav>
            <Logo size={2}/>
            
            <ul>
                <li>a</li>
                <li>b</li>
                <li>c</li>
            </ul>
        </Nav>
    )
}