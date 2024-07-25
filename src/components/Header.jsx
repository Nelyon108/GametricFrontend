import React from 'react'
import logo from '../assets/GametricG.png';


const Header=() => {

    const ScrolltoBottom = () => {
        scrollBy(0, 1000000);
    } 
    
  return (
    <nav className='header'>
        <a href="/"><img src={logo} alt="Gametric Logo" className='logo' /></a>
        <div className='navigation'>
        <a href="/"><p>Home</p></a>
        <a href="/about"><p>About</p></a>
        <a href="/contact"><p>Contact</p></a>
        <a href="/announcements"><p>Announcements</p></a>
        {/* <a href="/announcements/new"><p>Create Anouncement</p></a> */}
        </div>

        <button onClick={ScrolltoBottom}>Contact Us</button>
    </nav>
  )
}

export default Header;
