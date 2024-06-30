import { AiOutlineLogout } from "react-icons/ai";
import { AvatarImg, HeroAccount, KanbanAccount, LogoutButton } from "./styles";
import { signOut } from "next-auth/react";
import { SignOut } from "phosphor-react";
import React from "react";


interface KanbanLogoutProps{
    username:string 
    image:string
}
export class KanbanLogoutComponent extends React.Component<KanbanLogoutProps> {

    constructor(props:KanbanLogoutProps){
        super(props)
    }

    
    render(): React.ReactNode {
       
        return (

            <>  
                <KanbanAccount>
                    
                    <HeroAccount>
                        <AvatarImg fetchPriority="high" src={this.props.image} quality={100} width={40} height={40} alt="User icon" />   
                        
                        <span>
                            {this.props.username}
                        </span>    
                        
                    </HeroAccount>
    
                    <LogoutButton onClick={()=>signOut()}><SignOut size={25}/></LogoutButton>
                    
                </KanbanAccount>
                
            
            </>
           
        )
    }
    
}