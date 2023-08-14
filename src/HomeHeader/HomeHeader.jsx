import React from 'react'
import './HomeHeader.css'
import Nav from '../Nav/Nav'

export default function HomeHeader({ movies, URL_IMAGE }) {

  return (
    <div className='header-container'>
      <Nav/>
      {
        movies.length > 0 &&
        <div>
          <img className='img-header-container' src={(`${URL_IMAGE}` + movies[0].poster_path)} />
          <div className='header-body'>
            <p className='sinopsis'>{movies[0].overview}</p>
            <h2 className='movie-title'>{movies[0].title}</h2>
          </div>
        </div>
      }
    </div>
  )
}
