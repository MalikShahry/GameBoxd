import React from 'react';
import '../styles/NavBar.css';
import { Link } from 'react-router-dom';
import logo from '../assets/gameboxdLogo.png'



function NavBar() {

    return(
        <header class='NavHeader'>
            <section class='NavSection'>

                <div class='NavDiv'>
                    <nav class='NavBar'>

                        <h1 class="SiteLogo">
                            <img src={logo}></img>
                            <a href="/" className="logo"> GameBoxd 
                            </a>
                        </h1>
                        
                        <ul class='NavItems'>

                            <li>
                            <Link to='/login'>Sign In</Link>
                            </li>
                            
                            <li>
                            <Link to='/createAccount'>Create Account</Link>
                            </li>
                        
                            <li>
                            <Link to='/games'>Games</Link>
                            </li>
                            
                            <li>
                            <Link to='/lists'>Lists</Link>
                            </li>

                            <li>
                            <Link to='/profile'>Profile</Link>
                            </li>
                                
                        </ul>
                    
                    </nav>
                </div>
            </section>
        </header>
    );

}

export default NavBar;