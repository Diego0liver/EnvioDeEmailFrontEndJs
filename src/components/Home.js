import React from 'react'
import '../styled/Home.scss'



export const Home = () => {
  return (
    <div className='home'>
    <u> 
        <li>Shop</li>
        <li>About</li>
        <li>Contato</li>
    </u>
    <h1>Make Your Interior More Minimaistic & Modern</h1>
    <p>Bringing interiors to life, understanding the person or people<br />
     living in a home
       is far greater need in design.
    </p>
    <input type='search' placeholder='search'></input>
    <div className='boll-cont'>
    <div className='boll'></div>
    <div className='boll2'></div>
    <div className='boll3'></div>
    </div>
    </div>
    )
}