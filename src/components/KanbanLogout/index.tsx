import { AiOutlineLogout } from "react-icons/ai";
import { HeroAccount, KanbanAccount, LogoutButton } from "./styles";
import Image from "next/image";
import userIcon from '../../assets/user.png'
import { SignOut } from "phosphor-react";
import React from "react";

export class KanbanLogoutComponent extends React.Component {

    render(): React.ReactNode {
        return (

            <>  
                <KanbanAccount>
                    
                    <HeroAccount>
                        <Image src={userIcon} width={40} height={40} alt="User icon" />   
                        <span>
                            Anderson Bones
                        </span>    
                        
                    </HeroAccount>
    
                    <LogoutButton><SignOut size={25}/></LogoutButton>
                    
                </KanbanAccount>
                
            
            </>
           
        )
    }
    
}