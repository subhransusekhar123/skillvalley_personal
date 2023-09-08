import React, { useState } from 'react';
import "./Navbar.css";
import bell from "../assets/iconmonstr-bell-3.svg";
import question from "../assets/iconmonstr-question-thin-img.svg";
import paperPlane from "../assets/iconmonstr-paper-plane-7.svg";
import NavbarCard from './NavbarCard';


const Navbar = () => {
    const [toggle, setToggle] = useState(true);

    const switchToggle = () => {
        toggle ? setToggle(false) : setToggle(true);
        console.log("hello")
    }
    return (
        <div className='navbar'>
            <div className="left-nav">
                <div className='logo' >
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/1024px-LEGO_logo.svg.png" alt="logo_place" className='image_logo' />
                </div>
                <div className='navbar_buttons'>
                    <span className='navbar_buttons_button'><a href="">Find Works</a></span>
                    <span className='navbar_buttons_button'><a href="">My jobs</a></span>
                    <span className='navbar_buttons_button'><a href="">Reports</a></span>
                    <span className='navbar_buttons_button'><a href="">Messages</a></span>
                </div>


               
            </div>
{
    toggle && <NavbarCard/>
}
           

            <div className="right-nav">
                <span><a href=""><img src={question} alt="" srcset="" /></a></span>
                <span><a href=""><img src={paperPlane} alt="" srcset="" /></a></span>
                <span><a href=""><img src={bell} alt="" srcset="" /></a></span>
                <span className='right-nav-image-container' onClick={switchToggle}><img className='profile-image' src="https://www.upwork.com/profile-portraits/c1ozvy8ufV39ApRIrq4HOdiJMCfIcKoOYAGv4wKKdqfkngqLy1pzCetxy6b7MFj68v" alt=""  /></span>

            </div>

        </div>
    )
}

export default Navbar;