import React from "react";
import { FooterComponent } from "./styles";

export class Footer extends React.Component{


    render(): React.ReactNode {
        return (
            <FooterComponent>
                <a href="https://github.com/AndersonBones" target="_blank">© 2024 Anderson Bones</a>
            </FooterComponent>
        )
    }
    
}