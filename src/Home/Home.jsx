import React, { useState, useEffect } from 'react'
import './Home.css'
import axios from 'axios'
import Carousel from '../Carousel/Carousel'
import HomeHeader from '../HomeHeader/HomeHeader';
import Nav from '../Nav/Nav'
import Loader from '../Loader/Loader';
export default function Home() {

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MzNhNTc4Yzg3N2U3Y2I1NTY4Nzk1ODViMDQ5NjczNCIsInN1YiI6IjY0ZDJkOTE0ZDEwMGI2MDExYzdlZTVhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qTf7ppiGnJwfI8RiUBDdKD6Nr0br8K4wlpsR1C-UoOA'
        }
    };

    const API_URL = 'https://api.themoviedb.org/3'
    const API_KEY = '533a578c877e7cb556879585b0496734'
    const API_IMAGE = 'https://image.tmdb.org/t/p/original'
    const URL_IMAGE = 'https://image.tmdb.org/t/p/original'
    const URL_GENRE = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=en-US&page=2&sort_by=popularity.desc&with_genres='
    const ID_TERROR = '27'
    const ID_ACTION = '12'

    const [actionMovies, setActionMovies] = useState([])
    const [terrorMovies, setTerrorMovies] = useState([])
    const [movies, setMovies] = useState([])
    const [searchKey, setSearchKey] = useState("")


    //------------------------------------------------------------------
    async function fetchMovies(searchKey) {
        const type = searchKey ? "search" : 'discover'
        const { data: { results },

        } = await axios.get(`${API_URL}/${type}/movie/`, {
            params: {
                api_key: API_KEY,
                query: searchKey
            }
        })
        setMovies(results)
    }

    useEffect(() => {
        const delay = setTimeout(() => {
            fetchMovies(searchKey);

        }, 1000)

        return () => clearTimeout(delay);
    }, [searchKey]);

    //-----------------------------------------------------

    useEffect(() => {
        fetch((`${URL_GENRE}${ID_TERROR}`), options)
            .then(response => response.json())
            .then(response => setTerrorMovies(response.results))
        fetch((`${URL_GENRE}${ID_ACTION}`), options)
            .then(response => response.json())
            .then(response => setActionMovies(response.results))
        
            window.addEventListener('load', () => {
                setIsLoading(false);
              });
          
              return () => {
                document.removeEventListener('DOMContentLoaded', () => {
                  setIsLoading(false);
                });
                window.removeEventListener('load', () => {
                  setIsLoading(false);
                })}
              


    }, [])

    const [isLoading, setIsLoading] = useState(true);



    return (
        <div>
            {isLoading ? <Loader /> :
                <div>
                    <Nav />
                    <HomeHeader movies={movies} URL_IMAGE={URL_IMAGE} />
                    <Carousel URL_IMAGE={URL_IMAGE} movies={movies} titulo={"Populares en netflix"} />
                    <Carousel URL_IMAGE={URL_IMAGE} movies={terrorMovies} titulo={"Terror"} />
                    <Carousel URL_IMAGE={URL_IMAGE} movies={actionMovies} titulo={"Accion"} />
                </div>}
        </div>
    )
}
