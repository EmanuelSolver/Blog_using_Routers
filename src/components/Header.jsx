import {Link} from 'react-router-dom'
import { BiAlignJustify } from "react-icons/bi";
import { ImHome} from "react-icons/im";
import { FcAbout } from "react-icons/fc";

const Header = ()=>{

    return(
        <>
        <div style={{display:"flex", justifyContent:"space-around", alignItems:"center"}}>
            <Link to="/about" style={{textDecoration:"none", color:"black", fontSize:"20px"}}><FcAbout />About</Link>
            <Link to="/home" style={{textDecoration:"none", color:"black", fontSize:"20px"}}>< ImHome />Home</Link>
            <Link to="/highlights" style={{textDecoration:"none", color:"black", fontSize:"20px"}}><BiAlignJustify />Highlights</Link>           
        </div>
        <div >
           <h1 style={{textAlign:"center"}}>Productivity Blog</h1>          
        </div>
        </>
        
    )
}

export default Header