import React, { useContext, useState } from 'react'
import { MoviesContext } from '../Context/MoviesContext'
import { Navigate, useNavigate } from 'react-router-dom'
import Loader from '../Loader/Loader'
import './AgregarUsuario.css'

export default function AgregarUsuario() {

    const [carga,setCarga] = useState(true)
    setTimeout(() => {
        setCarga(false)
    }, 1000);

    const {ICONS} = useContext(MoviesContext)
    let [nombre, setNombre] = useState("")
    let [seleccionarIcono, setSeleccionarIcono] = useState(false)
    const [iconoElegido, setIconoElegido] = useState(ICONS[0])
    const navigate = useNavigate()

    console.log(iconoElegido);

    function handleSeleccionarIcono(){
        setSeleccionarIcono(!seleccionarIcono)
    }

    function cambiarIcono(icon) {
        setIconoElegido(icon);
      }

    function Agregar() {
        let usuarios = JSON.parse(localStorage.getItem('usuarios'))
        let nuevoUsuario = {nombre: nombre, icono:iconoElegido, id: nombre }
        let usuariosNuevo = [...(usuarios),nuevoUsuario]
        localStorage.setItem('usuarios', JSON.stringify(usuariosNuevo))
        navigate('/Usuarios')
    }

    return (
        <div className='container-principal-agregar'>
            {carga ?
            
            <Loader/>
            :

                seleccionarIcono ?
                    <div className='iconos-container'>
                        {ICONS.map(icon =>{return <img src={icon} onClick={()=>{cambiarIcono(icon); handleSeleccionarIcono()}}></img>})}
                    </div>
                    :
                    <div className='crear-container'>
                        <div className='img-container'>
                            <img src={iconoElegido} onClick={handleSeleccionarIcono} />
                            <i onClick={handleSeleccionarIcono} className="bi bi-pencil"></i>
                        </div>
                        <form onSubmit={Agregar}>
                            <input className='input-crear-nombre' type="text" placeholder='Nombre del perfil' onChange={(e) => setNombre(e.currentTarget.value)}/>
                            <button className='input-crear-button' type='submit'>AGREGAR PERFIL</button>
                        </form>

                    </div>
            }
        </div>
    )
}
