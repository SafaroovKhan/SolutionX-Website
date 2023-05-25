import { useState } from "react";

function Navbar () {

    return (
        <div className="navbar-container">
            <nav className="navbar">
                <div className="right-side">
                    <h1 className="solutionx-logo">SolutionX</h1>
                </div>
                <div className="navlinks">
                    <button className="navbtn"><a href="#header" className="navlink">Ana Səhifə </a></button>
                    <button className="navbtn"><a href="#aboutus" className="navlink">Haqqımızda</a></button>
                    <button className="navbtn"><a href="#ourteam" className="navlink">Komandamız</a></button>
                    <button className="navbtn"><a href="#ourservice" className="navlink">Xidmətlər</a></button>
                    <button className="navbtn"><a href="#contactus" className="navlink">Əlaqə</a></button>
                </div>
            </nav>
        </div>
    );
}
export default Navbar;