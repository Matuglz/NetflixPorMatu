import React, { useState } from 'react'
import './Nav.css'
import us1 from '../assets/us1.png'
import logo from '../assets/netflix_logo_icon.png'

export default function Nav() {

    const [fix, setFix] = useState(false)

    function setFixed(){
        if(window.scrollY >= 10){
            setFix(true)
        }else{setFix(false)}
    }

    window.addEventListener('scroll',setFixed)

    return (
        <nav className={fix ? 'nav fixed' : 'nav'}>
            <div className='div-izquierda'>
                <img className='nav-logo' src={logo} alt="" />
                <span>Explorar<i className="bi bi-caret-down-fill"></i></span>
            </div>

            <div className='div-derecha'>
                <i className="cast-icon bi bi-cast"></i>
                <img className='caca' src={us1} alt="user" />
            </div>
        </nav>
    )
}
