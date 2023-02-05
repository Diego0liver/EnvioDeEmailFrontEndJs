import React from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form';
import '../styled/Contato.scss'
import Face from '../img/face.png'
import Inst from '../img/inst.png'
import Pen from '../img/pen.png'



const Contato = () => {
    const {register, handleSubmit, formState: { errors }} = useForm();

    
const baseURL = "http://localhost:2222/contato"
  function recarregarAPagina(){
    window.location.reload();
} 
  const addForm = data => axios.post(baseURL, data)
  .then(()=>{alert('Email enviado com sucesso') || recarregarAPagina()}).catch(()=>{alert('erro')})

  return (
    <div className="Contato">
    <h1>Contact us</h1>
    <div className='conteiner'>
    <div>
      <h3>Contacts</h3>
      <p>Fone: (55)3322-4334</p>
      <p>Email: moveis@shady.com</p>
      <div>
        <img src={Inst} alt='insta'></img>
        <img src={Face} alt='face'></img>
        <img src={Pen} alt='pinten'></img>
      </div>
    </div>
    <div className='formulario'>
    <form onSubmit={handleSubmit(addForm)}>
    <label>What is your email</label><br />
    <input type='text'  name="from" {...register("from", 
    { required: true })} ></input><br />
    {errors.from && <span>Campo Obrigatorio*</span>}<br />

    <label>Reason for contact</label><br />
    <input type='text'  name="subject" {...register("subject", 
    { required: true })}></input><br />
    {errors.subject && <span>Campo Obrigatorio*</span>}<br />

    <label>What can we help?</label><br />
    <textarea  name="email" {...register("email", 
    { required: true })}></textarea><br />
    {errors.email && <span>Campo Obrigatorio*</span>}<br />

    <button className='btn-salv' type="submit">Enviar</button>
    </form>
    </div>
</div>
    </div>
  )
}

export default Contato