import React from 'react'
import './Header.css'
import {signInWithGoogle, auth, signingOut} from './firebase'
import { Link } from "react-router-dom";

var name = localStorage.getItem("name")

console.log(name)

const handleAuthenticaton=()=>{  
        auth.signOut()
}
function Header() {
    
  return (
    <div className='header'>
        <Link to='/'>
            <img className='header_logo' src="https://i.ibb.co/1ZsrXyQ/94417434-padded-logo.png" alt="94417434-padded-logo" border="0" />
        </Link>
       
        <div className='header_nav'>

            <div className='header_nav_items'>
                <button className='button' onClick={name?signingOut:signInWithGoogle}>{name?'Welcome'+' '+name+' '+'/Signout':'Sign in'}</button>
            </div>
            <Link to='/About'>
                <div className='header_nav_items'>
                    <span>About</span>
                </div>
            </Link>
            
            <Link to='/Events'>
                <div className='header_nav_items'>
                    <span>Events</span>
                </div>
            </Link>
            
            <Link to='/Contact'>
                <div className='header_nav_items'>
                    <span>Contact</span>
                </div>
            </Link>
            
        </div>
    </div>
  )
}

export default Header