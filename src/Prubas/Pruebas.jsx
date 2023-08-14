import React from 'react'

export default function Pruebas() {
    fetch('https://api.themoviedb.org/3/search/movie?query=american+pie&api_key=533a578c877e7cb556879585b0496734')
        .then(data => console.log(data.json()))


  return (
    <div>Pruebas</div>
  )
}
