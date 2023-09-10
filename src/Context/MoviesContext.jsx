import { createContext, useState } from "react";
import clasico1 from '../assets/icons/clasico1.png';
import clasico2 from '../assets/icons/clasico2.png';
import clasico3 from '../assets/icons/clasico3.png';
import clasico4 from '../assets/icons/clasico4.png';
import clasico5 from '../assets/icons/clasico5.png';
import clasico6 from '../assets/icons/clasico6.png';
import clasico7 from '../assets/icons/clasico7.png';
import clasico8 from '../assets/icons/clasico8.png';
import clasico9 from '../assets/icons/clasico9.png';
import clasico10 from '../assets/icons/clasico10.png';
import clasico11 from '../assets/icons/clasico11.png';
import clasico12 from '../assets/icons/clasico12.png';
import clasico13 from '../assets/icons/clasico13.png';
import clasico14 from '../assets/icons/clasico14.png';
import clasico15 from '../assets/icons/clasico15.png';
import clasico16 from '../assets/icons/clasico16.png';
import clasico17 from '../assets/icons/clasico17.png';
import clasico18 from '../assets/icons/clasico18.png';
import clasico19 from '../assets/icons/clasico19.png';
import clasico20 from '../assets/icons/clasico20.png';
import clasico21 from '../assets/icons/clasico21.png';
import clasico22 from '../assets/icons/clasico22.png'

const ICONS = [clasico1,clasico2,clasico3,clasico4,clasico5,clasico6,clasico7,clasico8,clasico9,clasico10,clasico11,clasico12,clasico13,clasico14,clasico15,clasico16,clasico17,clasico18,clasico19,clasico20,clasico21,clasico22]  

export const MoviesContext = createContext()


export default function MoviesProvider({children}) {
  const URL_IMAGE = 'https://image.tmdb.org/t/p/original'

    const [peliculasBusqueda, setPeliculasBusqueda] = useState([])

    //SEARCH BAR
    const [isExpanded, setIsExpanded] = useState(false)
  
    function toggleExpand(){
      setIsExpanded(!isExpanded)
    }

    // EDITAR PERFIL
    const [divId, setDivId] = useState("")

    function handleId(e) {
        setDivId(e)
    }

  return (
    <MoviesContext.Provider  value={{peliculasBusqueda, setPeliculasBusqueda, URL_IMAGE, toggleExpand, isExpanded, ICONS, divId, handleId}}>
        {children}
    </MoviesContext.Provider>
  )
}
