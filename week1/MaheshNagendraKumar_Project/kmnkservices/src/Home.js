import React from 'react'
import './Home.css'

function Home() {
  return (
    <div className='home'>
        
        <div className='home_container'>
            <img className='home_image' src='https://static.wixstatic.com/media/61449d37e2c84f6ca369b41542d785a3.jpg' alt=""/>
            <h1 className="first-txt">WELCOME</h1>
            <h2 className="second-txt">TO</h2>
            <h1 className="first-txt">KMNK EVENTS</h1>
            <h2 className="second-txt">----WE PLAN.YOUR PARTY.----</h2>
            
        </div>
        {/* <button className="first-txt">Book</button> */}
        {/* <h1>WELCOME</h1>
        <h2>TO</h2>
        <h1>KMNK EVENTS</h1>
        <button>Book</button> */}
    </div>
  )
}

export default Home