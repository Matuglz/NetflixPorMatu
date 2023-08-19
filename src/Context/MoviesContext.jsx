import { createContext, useState } from "react";


export const MoviesContext = createContext()


export default function MoviesProvider({children}) {
  const URL_IMAGE = 'https://image.tmdb.org/t/p/original'

    const [peliculasBusqueda, setPeliculasBusqueda] = useState([])

  return (
    <MoviesContext.Provider  value={{peliculasBusqueda, setPeliculasBusqueda, URL_IMAGE}}>
        {children}
    </MoviesContext.Provider>
  )
}
