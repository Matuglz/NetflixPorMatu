import React, { useContext, useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import './QuienEs.css'
import logo from '../assets/logo-netflix.png'
import { MoviesContext } from '../Context/MoviesContext'


export default function QuienEs() {

    const {ICONS} = useContext(MoviesContext)
    const navigate = useNavigate()
    const [hover, setHover] = useState(false)

    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || []

    if (usuarios.length == 0) {
        let usuario1 = { nombre: 'usuario', icono: ICONS[0], id: 'usuario' }
        usuarios.push(usuario1)
        localStorage.setItem("usuarios", JSON.stringify(usuarios))
        usuarios = JSON.parse(localStorage.getItem("usuarios"))
    }

    function administrarPerfiles(){
        navigate('/AdministrarPerfiles')
    }

    function toHome() {
        navigate('/Home')
    }

    function agregar(){
        navigate('/AgregarUsuario')
    }

    function mouseOver() {
        setHover(true)
    }

    function mouseOut() {
        setHover(false)
    }
    return (
        <div className='container-principal'>
            <img className='logo' src={logo} alt="netflix logo" />
            <p className='quien'>¿Quién está viendo ahora?</p>
            <div className='container'>
                {
                    usuarios.map(usuario => {
                        return (
                            <div key={usuario.nombre} onClick={toHome} className='user-container'>
                                <div className='img-container'>
                                    <img className='user-img' src={usuario.icono} alt="icono usuario" />
                                </div>
                                <p className='user-name'>{usuario.nombre.toUpperCase()}</p>
                            </div>
                        )
                    })
                }
                {
                    usuarios.length < 4 &&
                    <div onClick={agregar} onMouseOver={mouseOver} onMouseOut={mouseOut} className='user-container'>
                        <div className="img-container">{hover ? <i className="bi bi-plus-circle icon"></i> : <i className="bi bi-plus-circle-fill icon"></i>}</div>
                        <p className='user-name'>AGREGAR PERFIL</p>
                    </div>
                }
            </div>
            <button onClick={administrarPerfiles} className='boton-administrar'>Administrar perfiles</button>
        </div>
    )
}
