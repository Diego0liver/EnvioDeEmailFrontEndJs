import React from 'react'
import '../styled/Produtos.scss'
import sofa0 from '../img/cad0.png'
import sofa1 from '../img/cad1.png'
import sofa2 from '../img/cad2.png'
import sofa3 from '../img/cad3.png'
import estrela from '../img/estrela.png'


const Produtos = () => {
  return (
    <div className='Produtos'>
        <h2>Featured Product</h2>
        <div className='card-conteiner'>
            <div className='card-produtos'>
              <img className='sofa' src={sofa0} alt='sofa'></img>
              <p><b>Product</b></p>
              <p style={{color:'#C4C4C4'}}>Category</p>
              <div className='star-cont'>
              <img src={estrela} alt='sofa'></img>
              <img src={estrela} alt='sofa'></img>
              <img src={estrela} alt='sofa'></img>
              <img src={estrela} alt='sofa'></img>
              <img src={estrela} alt='sofa'></img>
              </div>
              <p>IDR 795.000</p>
            </div>

            <div className='card-produtos'>
              <img className='sofa' src={sofa1} alt='sofa'></img>
              <p><b>Product</b></p>
              <p style={{color:'#C4C4C4'}}>Category</p>
              <div className='star-cont'>
              <img src={estrela} alt='sofa'></img>
              <img src={estrela} alt='sofa'></img>
              <img src={estrela} alt='sofa'></img>
              <img src={estrela} alt='sofa'></img>
              <img src={estrela} alt='sofa'></img>
              </div>
              <p>IDR 595.000</p>
            </div>

            <div className='card-produtos'>
              <img className='sofa' src={sofa2} alt='sofa'></img>
              <p><b>Product</b></p>
              <p style={{color:'#C4C4C4'}}>Category</p>
              <div className='star-cont'>
              <img src={estrela} alt='sofa'></img>
              <img src={estrela} alt='sofa'></img>
              <img src={estrela} alt='sofa'></img>
              <img src={estrela} alt='sofa'></img>
              <img src={estrela} alt='sofa'></img>
              </div>
              <p>IDR 2.555.000</p>
            </div>

            <div className='card-produtos'>
              <img className='sofa' src={sofa3} alt='sofa'></img>
              <p><b>Product</b></p>
              <p style={{color:'#C4C4C4'}}>Category</p>
              <div className='star-cont'>
              <img src={estrela} alt='sofa'></img>
              <img src={estrela} alt='sofa'></img>
              <img src={estrela} alt='sofa'></img>
              <img src={estrela} alt='sofa'></img>
              
              </div>
              <p>IDR 1.500.000</p>
            </div>
        </div>
    </div>
  )
}

export default Produtos