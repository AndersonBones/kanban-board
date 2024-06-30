import { ReactNode } from "react";
import { Container } from "./styles";
import { Footer } from "../footer";
import React from "react";

interface LayoutProps {
    children: ReactNode
}

export class RootLayout extends React.Component<LayoutProps>{

    constructor(props:LayoutProps){
        super(props)
    }

    render(): ReactNode {
        return (
            <Container>
                
                {this.props.children}
    
                {/* <Footer/>  */}
            </Container>
        )
    }
    
}