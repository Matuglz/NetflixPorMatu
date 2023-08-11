import React from 'react'
import './QuienEs.css'
import us1 from '../assets/us1.png'
import us2 from '../assets/us2.png'
import us3 from '../assets/us3.png'
import us4 from '../assets/us4.png'

export default function QuienEs() {
    return (
        <section className='contenedor-usuarios'>
            <h2 className='titulo-usuarios'>¿Quién está viendo ahora?</h2>
            <div className='usuarios'>
                <div className='usuario-quien'>
                    <img src={us1} alt="usuario1" />
                    <h3>Carla</h3>
                </div>
                <div className='usuario-quien'>
                    <img src={us2} alt="usuario2" />
                    <h3>Matias</h3>
                </div>
                <div className='usuario-quien'>
                    <img src={us3} alt="usuario3" />
                    <h3>Mirta</h3>
                </div>
                <div className='usuario-quien'>
                    <img src={us4} alt="usuario4" />
                    <h3>Hernan</h3>
                </div>
            </div>

        </section>
    )
}
