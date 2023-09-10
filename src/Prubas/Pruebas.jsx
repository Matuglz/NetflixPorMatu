import React from 'react'

export default function Pruebas() {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MzNhNTc4Yzg3N2U3Y2I1NTY4Nzk1ODViMDQ5NjczNCIsInN1YiI6IjY0ZDJkOTE0ZDEwMGI2MDExYzdlZTVhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qTf7ppiGnJwfI8RiUBDdKD6Nr0br8K4wlpsR1C-UoOA'
    }
  };
  
  fetch('https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=es-MX&page=1&sort_by=popularity.desc&with_genres=80', options)
    .then(response => response.json())
    .then(response => console.log(response.results))

  return (
    <div>Pruebas</div>
  )
}
