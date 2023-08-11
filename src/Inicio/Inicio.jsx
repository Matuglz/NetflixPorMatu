import React, { useState } from 'react'
import './Inicio.css'
import logo from '../assets/logo-netflix.png'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom/dist/react-router-dom.production.min'


export default function Inicio() {

  const { register, handleSubmit } = useForm()

  const [correo, setCorreo] = useState("")
  const [contraseña, setContraseña] = useState("")

  let contraseñaCorrecta = "1234"
  let correoCorrecto = "netflix@matias.com"

  const navigate = useNavigate()

  
  function iniciarSesion(){
    if(correo === correoCorrecto && contraseña === contraseñaCorrecta){
      navigate("/Usuarios")
    }else{
      // setAlert(true)
      // setTimeout(() => {
      //   setAlert(false)
      // }, 2000);
      console.log("error");
    }
  }

  return (
    <section className='contenedor-inicio'>
      <div className='color-fondo'>
        <h1><img className='logo' src={logo} alt="" /></h1>
        <div className='contenedor-sesion'>
          <div className='formulario-sesion'>
            <h2>Inicia sesión</h2>
            <form className='form-sesion' action="login" onSubmit={handleSubmit(iniciarSesion)}>
              <input className='input-sesion'
                type="email" placeholder='Mira la consola ;)'
                {...register('correo', { setValueAs: (value) => value.toLowerCase() })}
                onChange={(e) => setCorreo(e.currentTarget.value)} />

              <input className='input-sesion'
                type="password" placeholder='Contraseña'
                {...register('contraseña')}
                onChange={(e) => setContraseña(e.currentTarget.value)} />

              <button className='button-sesion' type='submit'>Iniciar sesión</button>
            </form>
            <div className='contenedor-form'>

              <div>
                <input id='checkbox' type="checkbox" />
                <label htmlFor="checkbox">Recuerdame</label>
              </div>
              <p>¿Necesitas ayuda?</p>
            </div>
            <div className='form-anuncio'>¿Primera vez en Netflix?<p>Suscribite ahora.</p></div>
          </div>
        </div>
      </div>
    </section>
  )
}
