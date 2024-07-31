import { globalCss } from ".";

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
   


  },

  body:{
    fontFamily:'Roboto',
    
  },

  button:{
    opacity:'0.9',
    cursor:'pointer',
    border:'none',
    borderRadius:".3rem",
    fontSize:"$md2",
    

    '&:hover':{
      opacity:'1'
    }
  },

  input:{
    borderRadius:".3rem",
    padding:'1rem .8rem',
    fontSize:'$md2',
    border:"$gray",

    outline:'none'
    
    
  },

  a:{
    textDecoration:"none",
    color:"$linkedinBlue",

  },

  '.submit_button':{
    backgroundColor:'$linkedinBlue',
    color:'$white',
  },
  '.form_actions':{
    display:"flex",
    gap:".5rem",
 

    button:{
        padding:".5rem"
    },

    backgroundColor:'$white',
  },

  '.form_dialog':{
    display:"flex",
    flexDirection:"column",
    gap:'1rem',
    padding:'1rem',
    borderRadius:'.3rem',
    backgroundColor:"$white",
    boxShadow:"rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",

    input:{
        backgroundColor:"$gray"
    },

    
  }

  



});
