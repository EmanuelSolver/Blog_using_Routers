import {RiCopyrightLine } from "react-icons/ri";


const Footer = ()=>{
    return( 
      <div style={{backgroundColor:"aliceblue", position:"fixed", bottom:"0px", display: "flex", alignItems:"center", justifyContent:"space-around", borderTop:"1px solid red", width:"100%"}}>
          <p><strong>Designed by Njiru</strong></p>
            <h4>{<RiCopyrightLine />}{ new Date().getFullYear()}</h4>
      </div>
    )
} 

export default Footer