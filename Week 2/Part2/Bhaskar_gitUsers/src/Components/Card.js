import React from 'react'
import './Card.css'

function Card({title , count}) {
  return (
    <div className='card'>
      <p className='card_title'>{title}</p>
      <p className='card_count'>{count}</p>
    </div>
  )
}

export default Card
