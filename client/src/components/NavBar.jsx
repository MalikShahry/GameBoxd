import React from 'react';
import '../styles/NavBar.css';

function NavBar() {

    return(
    
        <nav className='NavBar'>
            <div className="navbar-right">
                <a href="/" className="logo">
                    GameBoxd </a>
            </div>
            
            <div className='navbar-right'>

                <a href='/'>Sign In </a>
                
                <a href='/'>Create Account </a>
            
                <a href='/'>Games </a>
                
                <a href='/'>Lists </a>
                
                
            </div>
        
        </nav>
    );

}

export default NavBar;