import React, { useState } from 'react'
import './Nav.css'
import us1 from '../assets/us1.png'
import logo from '../assets/netflix_logo_icon.png'
import logoDesk from '../assets/logo-netflix.png'
import SearchBar from '../SearchBar/SearchBar'

export default function Nav({toggleBuscar}) {

    const [fix, setFix] = useState(false)

    function setFixed() {
        if (window.scrollY >= 10) {
            setFix(true)
        } else { setFix(false) }
    }

    window.addEventListener('scroll', setFixed)


    return (
        <nav className={fix ? 'nav fixed' : 'nav'}>
            <div className='div-izquierda'>
                <img className='nav-logo' src={logo} alt="logo" />
                <span>Explorar<i className="bi bi-caret-down-fill"></i></span>
            </div>

            <div className='div-izquierda-desktop'>
                <img className='logo-desk' src={logoDesk} alt="logo" />
                <ul className='ul-nav'>
                    <li onClick={toggleBuscar}>Inicio</li>
                    <li>Series</li>
                    <li>Peliculas</li>
                    <li>Novedades populares</li>
                    <li>Mi lista</li>
                    <li>Explorar por idiomas</li>
                </ul>
            </div>


            <div className='div-derecha'>
            <SearchBar className="search-bar" toggleBuscar={toggleBuscar}/>
                <img className='caca' src={us1} alt="user" />
            </div>

            <div className='div-derecha-desktop'>
                <SearchBar toggleBuscar={toggleBuscar}/>
                <span className='niños'>Niños</span>
                <i className="bi bi-bell"></i>
                <img className='caca' src={us1} alt="user" />
                <i className="bi bi-caret-down-fill nav-caret-down"></i>
            </div>
        </nav>
    )
}
