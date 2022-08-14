import React from 'react'
import './Header.css'
import {signInWithGoogle, auth, provider} from './firebase'

var name = localStorage.getItem("name")
var profilePic = localStorage.getItem("profilePic")
console.log(name)
const handleAuthenticaton=()=>{  
        auth.signOut()
}
function Header() {
    
  return (
    <div className='header'>
        <img className='header_logo' src="https://i.ibb.co/1ZsrXyQ/94417434-padded-logo.png" alt="94417434-padded-logo" border="0" />
        <div className='header_nav'>

            <div className='header_nav_items'>
                <button className='button' onClick={name?handleAuthenticaton:signInWithGoogle}>{name?'Sign out':'Sign in'}</button>
            </div>
        
            <div className='header_nav_items'>
                <span>About</span>
            </div>

            <div className='header_nav_items'>
                <span>Events</span>
            </div>

            <div className='header_nav_items'>
                <span>Contact</span>
            </div>
        </div>
    </div>
  )
}

export default Header