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

  



});
