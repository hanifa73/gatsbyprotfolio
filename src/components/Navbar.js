import React from "react"
import Asset3 from "../assets/Asset3.svg"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"
const Navbar = ({toggleSidebar}) => {
  return <nav className="navbar">
           <div className="nav-center">
            <div className="nav-header">
              <img style={{marginTop:"30px",height:"100px",width:"2 rem",}} src={Asset3} alt="logo"/>
              <button type="button" className="toggle-btn" aria-label="Save" onClick={toggleSidebar} ><FaAlignRight/></button>
            </div> 
             <PageLinks styleClass="nav-links"></PageLinks>
           </div> 
        </nav>
}

export default Navbar
