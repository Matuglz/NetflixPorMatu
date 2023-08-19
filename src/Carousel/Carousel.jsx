import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton'
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';

import './carousel.css';

export default function App({ URL_IMAGE, movies, titulo }) {

    const [agregado, setAgregado] =useState(false)
    const [width, setWidth] = useState(getInitialWidth)
    const [imgCarousel, setImgCarousel] = useState(widthEnPx)


    //PARA MODIFICAR LA CANTIDAD DE IMAGENES POR CAROUSEL EN EL VW

    useEffect(() => {
        const handleResize = () => {
            setWidth(getInitialWidth())
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    function getInitialWidth() {
        return window.innerWidth < 768 ? 2.5 : 5;
    }

    //PARA MODIFICAR LA IMG DEL CAROUSEL

    useEffect(() => {
        const windowResize = () => {
            setImgCarousel(widthEnPx())
        }
        window.addEventListener('resize', windowResize);
        return () => {
            window.removeEventListener('resize', windowResize);
        }
    }, [])

    function widthEnPx() {
        return window.innerWidth
    }

    //TIPS BOTONES

    useEffect(() => {
        tippy("#mas", {
          content: 'Info',
        });

        tippy('#mg',{
            content:'Me gusta'
        })

        tippy('#repro',{
            content:'Reproducir'
        })
      }, []);

      useEffect(()=>{
        agregado === false ? 
        tippy('#lista',{
            content:'Agregar a Mi lista'
        })
        : 
        tippy('#lista',{
            content:'Eliminar a Mi lista'
        })
        
      },[agregado])

      //fUNCION BOTONES
      function agregarLista() {
        setAgregado(!agregado)
      }

    return (
        <div className='swiper-m'>
            <h2 className='titulo'>{titulo}</h2>
            <Swiper
                slidesPerView={width}
                spaceBetween={5}
                className="mySwiper"
            >
                {
                    movies.map((movie) => {
                        return (
                            <SwiperSlide key={movie.id}>
                                <div className="swiper-slide-img">
                                    {<img
                                        className='img-carousel'
                                        src={imgCarousel < 768 
                                            ? (`${URL_IMAGE}` + movie.poster_path) 
                                            : (`${URL_IMAGE}` + movie.backdrop_path)}
                                        alt={movie.title}
                                    /> || <Skeleton />}
                                    <div className='hover-div'>
                                        <h3 className='title-hover'>{movie.title}</h3>
                                        <div className='buttons-hover'>
                                            <p className='btn-hover-derecha'>
                                                <button id='repro' className='btn-carousel-hover btn-repro'><i className="bi bi-play-fill"></i></button>
                                                <button id='lista' className='btn-carousel-hover' onClick={agregarLista}>
                                                    {agregado === false ? <i className="bi bi-plus-lg"></i> : <i className="bi bi-x-lg"></i>}
                                                </button>
                                                <button id='mg' className='btn-carousel-hover'><i className="bi bi-hand-thumbs-up"></i></button>
                                            </p>
                                            <button id="mas" className='btn-carousel-hover'><i className="bi bi-chevron-down"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    );
}


// {
//     movies.map((movie)=>{
//         return(
//             <SwiperSlide><img className='img-carousel' src={(`${URL_IMAGE}` + movie.poster_path)} alt="" /></SwiperSlide>
//         )
//     })
// }