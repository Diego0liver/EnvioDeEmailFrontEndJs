import React from 'react'
import '../styled/Detalhes.scss'
import Ok from '../img/ok.png'
import Ook from '../img/ook.png'
import Blo from '../img/blo.png'
import Star from '../img/star.png'


const Detalhe = () => {
  return (
    <div className='conteiner-det'>
       <h2>Why Choosing Us</h2>
       <div className='card-conteiner'>
      <div className='card'>
        <img src={Ok} alt='ok' ></img>
        <p>
        <b>Professionalism</b>
        </p>
        <p>
        We deliver the final work with great professional way.
        </p>
        <p className='info'>
        more info
        </p>
      </div> 

      <div className='card'>
        <img src={Blo} alt='ok' ></img>
        <p>
        <b>Smooth workflow</b>
        </p>
        <p>
        We provide the most easy smoth workflow of interior design.
        </p>
        <p className='info'> 
        more info
        </p>
      </div> 

      <div className='card'>
        <img src={Ook} alt='ok' ></img>
        <p>
        <b>Trusted Platform</b>
        </p>
        <p>
        People trust us since we openend the company
        </p>
        <p className='info'>
        more info
        </p>
      </div> 

      <div className='card'>
        <img src={Star} alt='ok' ></img>
        <p>
        <b>Qualified employee</b>
        </p>
        <p>
        Our employees are the best of the field from the city
        </p>
        <p className='info'>
        more info
        </p>
      </div> 
      </div>
    </div>
  )
}

export default Detalhe