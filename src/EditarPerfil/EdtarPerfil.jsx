import React, { useContext, useState } from 'react'
import { MoviesContext } from '../Context/MoviesContext'
import { useNavigate } from 'react-router-dom'
import './EditarPerfil.css'

export default function EdtarPerfil() {
    const { divId, ICONS } = useContext(MoviesContext)
    const navigate = useNavigate()
    const usuarios = JSON.parse(localStorage.getItem('usuarios'))
    const perfilEditar = usuarios.find(usuario => usuario.nombre == divId)


    const [editarIconos, setEditarIconos] = useState(false)
    const [nombre, setNombre] = useState(perfilEditar.nombre)

    function cambiarIcono(e) {
        let perfilModificado = { ...perfilEditar, icono: e }
        let usuariosSinPerfilSeleccionado = usuarios.filter(u => u.id != perfilModificado.id)
        let usuariosFiltrados = usuariosSinPerfilSeleccionado
        usuariosFiltrados.push(perfilModificado)
        localStorage.removeItem('usuarios')
        localStorage.setItem("usuarios", JSON.stringify(usuariosFiltrados))

    }


    function handleEditarIconos() {
        setEditarIconos(!editarIconos)
    }

    function cambiarNombre(e){
        setNombre(e.currentTarget.value)
    }

    function editarPerfil() {
        let perfilModificado ={...perfilEditar, nombre: nombre}
        let usuariosSinPerfilSeleccionado = usuarios.filter(u => u.id != perfilModificado.id)
        perfilModificado = {...perfilModificado, id: nombre}
        let usuariosFiltrados = usuariosSinPerfilSeleccionado
        usuariosFiltrados.push(perfilModificado)
        localStorage.removeItem('usuarios')
        localStorage.setItem("usuarios", JSON.stringify(usuariosFiltrados))
        navigate('/AdministrarPerfiles')
    }

    function eliminarPerfil(){
        let usuariosSinPerfilSeleccionado = usuarios.filter(u => u.id != perfilEditar.id)
        localStorage.removeItem('usuarios')
        localStorage.setItem('usuarios', JSON.stringify(usuariosSinPerfilSeleccionado))
        navigate('/AdministrarPerfiles')
    }

    return (
        <div className='container-editar-perfil'>
            {
                editarIconos ?
                    <div className='iconos-container'>
                        {ICONS.map(icon => { return (<img key={icon} src={icon} onClick={() => { cambiarIcono(icon); handleEditarIconos() }}></img>) })}
                    </div>
                    :
                    <div className='container-perfil-editado'>
                        <div onClick={handleEditarIconos}>
                            <img className='img-editar' src={perfilEditar.icono} alt={`icono de ${perfilEditar.nombre}`} />
                        </div>
                        <input className='input-nuevo-nombre' type="text" placeholder={nombre.toUpperCase()} onChange={cambiarNombre} />
                        <button className='boton-editar-perfil' onClick={editarPerfil}>LISTO</button>
                        {usuarios.length > 1 && <button className='boton-eliminar-perfil' onClick={eliminarPerfil}>ELIMINAR PERFIL</button> }
                    </div>
            }
        </div>
    )
}
