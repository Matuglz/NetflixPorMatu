import React, { useContext, useState } from 'react'
import './AdministrarPerfiles.css'
import { useNavigate } from 'react-router-dom'
import Loader from '../Loader/Loader';
import { MoviesContext } from '../Context/MoviesContext';

export default function AdministrarPerfiles() {

    const {handleId} = useContext(MoviesContext)

    const [loader, setLoader] = useState(true)
    setTimeout(() => {
        setLoader(false)
    }, 1000);

    let usuarios = JSON.parse(localStorage.getItem('usuarios'))


    const navigate = useNavigate()
    function toEdit() {
        navigate('/EditarPerfil')

    }

    function toUsers() {
        navigate('/Usuarios')
    }

    return (
        <div className='container-administrar'>
            {loader ? <Loader />
                :

                usuarios.map(usuario => {
                    return (
                        <div id={usuario.nombre} key={usuario.nombre} className='user-container'>
                            <div onClick={() => {toEdit(); handleId(usuario.nombre) }} className='img-container img-container-editar'>
                                <img className='user-img user-img-editar' src={usuario.icono} alt="icono usuario" />
                                <i className=" lapiz-editar bi bi-pencil"></i>
                            </div>
                            <p className='user-name'>{usuario.nombre.toUpperCase()}</p>
                        </div>
                    )
                })
            }
            <button onClick={toUsers}>LISTO</button>
        </div>
    )
}
