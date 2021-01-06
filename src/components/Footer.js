import React from "react"
import SocialLinks from "../constants/socialLinks"
const Footer = () => {
  return <footer className="footer">
    <div>
      <h4>copyright&copy;{(new Date().getFullYear())}
      <SocialLinks styleClass="footer-Llinks"/>
       <span>hanifa dev </span> all right reserved</h4>
    </div>
  </footer>
}

export default Footer
