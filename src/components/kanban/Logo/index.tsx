import { Comfortaa } from "next/font/google";
import { KanbanLogo } from "./styles";
import { ReactNode } from "react";
import React from "react";


const comfortaa = Comfortaa({ subsets: ["latin"], weight: "400"})

interface LogoProps{
    size:number
}
export class Logo extends React.Component<LogoProps>{

    constructor(props:LogoProps){
        super(props)
    }
    render(): ReactNode {
        return (
            <KanbanLogo css={{fontSize:`${this.props.size}rem`}}>
                <h1 className={comfortaa.className} >Kanban</h1>
            </KanbanLogo>
        )
    }
    
}