import React from 'react'
import './HomeHeader.css'

export default function HomeHeader({ movies, URL_IMAGE }) {

  return (
    <div className='header-container'>
      {
        movies.length > 0 &&
        <div>
          <img className='img-header-container' src={(`${URL_IMAGE}` + movies[0].poster_path)} />
          <div className='header-body'>
            <h2 className='movie-title'>{movies[0].title}</h2>
            <div className="button-container">
            <button className='boton-header boton-reproducir'><i className="bi bi-play-fill"></i> Reproducir</button>
            <button className='boton-header boton-lista'>+ Mi Lista</button>
            </div>
          </div>
        </div>
      }
    </div>
  )
}
