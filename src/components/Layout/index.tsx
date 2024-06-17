import { ReactNode } from "react";
import { Container } from "./styles";
import Footer from "../footer";

interface Props {
    children: ReactNode
}

export default function RootLayout({ children}:Props){
    return (
        <Container>
            
            {children}

            <Footer/> 
        </Container>
    )
}