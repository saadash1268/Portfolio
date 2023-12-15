import React from "react";
import './navbar.css';
// need to import logo once it is created 
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
    return (
        <nav className="navbar">
{  /* once logo is created add here  <img src = {logo} alt="logo" className="logo" /> */}
<div className="desktopmenu">
    <ScrollLink to="about" smooth={true} duration={500} className="desktopMenuListItem">About</ScrollLink>
    <ScrollLink to="projects" smooth={true} duration={500} className="desktopMenuListItem">Projects</ScrollLink>
    <ScrollLink to="contact" smooth={true} duration={500} className="desktopMenuListItem">Contact</ScrollLink>

    { /*<ScrollLink to="blog" smooth={true} duration={500} className="desktopMenuListItem">Blog</ScrollLink> */}
</div>
<button className="desktopMenuBtn">
    Contact Me</button>

        </nav>
    )
}

export default Navbar;