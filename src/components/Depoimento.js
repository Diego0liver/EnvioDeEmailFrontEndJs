import React from 'react'
import A from '../img/a.png'
import B from '../img/b.png'
import C from '../img/c.png'
import '../styled/Depo.scss'

const Depoimento = () => {
  return (
    <div className='depo'>
      <h2>What they say about our services</h2>

      <div className='cont-depo'>

      <div>
      <p style={{marginBottom:10}}><b>Best planning service</b></p>
      <p>I had fantastic experience at shady rhymes with pax planner, shady rhymes was so helpful and 
        friendly and went above and beyond to help me configure my perfect walk in wardobe room.
      </p>
      <div className='depoimento'>
      <img alt='a' src={A} ></img>
      <p><b>John doe</b><br />
      Project manager of cupalo</p>
      </div>
      </div>

      <div>
      <p style={{marginBottom:10}}><b>Flexible and reliable</b></p>
      <p>Terrific work from beginning to end can work any angle from minimal help to complete project 
        handling professional without a doubt!  Love!
      </p>
      <div className='depoimento'>
      <img alt='a' src={B} ></img>
      <p><b>Woods Moniq</b><br />
      Freelancer</p>
      </div>
      </div>

      <div>
      <p style={{marginBottom:10}}><b>solution innovative</b></p>
      <p>I loved working with Darla shady rhymes for about 2 years and highly recommend 
        anyone looking for an interior designer agency who
         brings creativity but designs something that fits YOU and your style.
      </p>
      <div className='depoimento'>
      <img alt='a' src={C} ></img>
      <p><b>Denis Rara</b><br />
      Architect at BPPLU</p>
      </div>
      </div>
      

      </div>
    </div>
  )
}

export default Depoimento