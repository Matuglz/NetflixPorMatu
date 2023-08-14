import React, { useRef, useState,useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './carousel.css';

export default function App({ URL_IMAGE, movies,titulo }) {

    
    const [width, setWidth] = useState(getInitialWidth)
    const [imgCarousel, setImgCarousel] = useState(widthEnPx)

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

    useEffect(() => {
        const windowResize = () => {
            setImgCarousel(widthEnPx())
        }
        window.addEventListener('resize', windowResize);
        return () => {
            window.removeEventListener('resize', windowResize);
        }
    }, [])

    function widthEnPx(){
        return window.innerWidth
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
                                <img className='img-carousel' src={imgCarousel < 768 ? (`${URL_IMAGE}` + movie.poster_path) : (`${URL_IMAGE}` + movie.backdrop_path)} alt={movie.title} />
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