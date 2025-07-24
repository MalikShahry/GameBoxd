import React from 'react';
import '../styles/NavBar.css';

function NavBar() {

    return(
        <header className='NavHeader'>
            <img></img>
            <a href="/">GameBoxd</a>

            <nav className='NavBar'>
                <ul>
                <a href='/'>Sign In</a>
                <a href='/'>Create Account</a>
                <a href='/'>Games</a>
                <a href='/'>Lists</a>
                <ul>

            </nav>
        </header>
    );

}

export default NavBar;