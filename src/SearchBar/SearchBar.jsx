import React, { useContext, useEffect, useState } from 'react'
import './SearchBar.css'
import  { MoviesContext } from '../Context/MoviesContext';



const SearchBar = ({toggleBuscar}) => {

  const {setPeliculasBusqueda} = useContext(MoviesContext)

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MzNhNTc4Yzg3N2U3Y2I1NTY4Nzk1ODViMDQ5NjczNCIsInN1YiI6IjY0ZDJkOTE0ZDEwMGI2MDExYzdlZTVhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qTf7ppiGnJwfI8RiUBDdKD6Nr0br8K4wlpsR1C-UoOA'
    }
  }
  const [isExpanded, setIsExpanded] = useState(false)
  const [busqueda, setBusqueda] = useState("")

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  useEffect(() => {
    let timeoutId;

    if (busqueda.trim() !== '') {
      timeoutId = setTimeout(() => {
        fetch(
          `https://api.themoviedb.org/3/search/movie?query=${busqueda}&include_adult=false&language=en-US&page=1`,
          options
        )
          .then((response) => response.json())
          .then((data) => setPeliculasBusqueda(data.results));
      }, 800);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [busqueda]);
  

  return (
    <div className={`search-bar ${isExpanded ? 'expanded' : ''}`}>
      <input
        type="text"
        className={`search-input ${isExpanded ? 'expanded' : ''}`}
        placeholder="Search"
        onBlur={toggleExpand}
        onChange={(e)=> setBusqueda(e.target.value)}
      />
      <i onClick={()=>{toggleBuscar();toggleExpand()}} className={`search-icon bi bi-search ${isExpanded ? 'expanded' : ''}`}></i>
    </div>
  );
};

export default SearchBar;
