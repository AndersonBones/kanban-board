import { styled } from "@/styles";



export const KanbanContainer = styled('div',{

    
    display:"flex",

    '@md':{
        
    }
    
})

export const KanbanMenu = styled('div', {
    
    width:"20rem",
    height:'100vh',
    display:'flex',
    justifyContent:"center",
    padding:'2rem 1.5rem',

    backgroundColor:"$gray500",
    color:"$white"
})

export const KanbanHeader = styled("div",{
    display:'flex',
    justifyContent:"space-between",
    padding:"1rem 0",
    marginBottom:"5rem",

})
export const KanbanTitle = styled("div",{
    color:"$darkGray",

})
export const KanbanArea = styled('div',{
    
    // display:"flex",
    // flexWrap:"wrap",
    
    // justifyContent:"flex-start",
    // alignItems:"flex-start",
    // display:"grid",
    // gridTemplateColumns:"repeat(4, 1fr)",
    // gridGap:"1rem 3rem",
    // gridTemplateRows:"masonry",

    columnCount:4,
    columnGap:"1rem 1rem",
    
  
    overflowY:"auto",
    borderRadius:".3rem",
    padding:"1rem",
    margin:'auto',

    width:"100%",
    height:"60rem",

    backgroundColor:"$gray",
    


    '&.empty':{
        display:"flex",
        justifyContent:'center',
        alignItems:"center",

        
        '&.empty-msg':{
            padding:".3rem .8rem",
            background:"$darkGray",
            borderRadius:".3rem",
            color:"$white"
        },
    }
 
})


export const DragTask = styled("div",{

    display:"grid",
    gridTemplateRows:"auto",
})

export const Kanban = styled("div",{
    
    width:"90rem",
    
    
    margin:"0 auto",
    padding:"1rem"
})