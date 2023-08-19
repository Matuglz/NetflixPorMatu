import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Inicio from './Inicio/Inicio'
import QuienEs from './QuienEs/QuienEs'
import Home from './Home/Home'
import Pruebas from './Prubas/Pruebas'
import { SkeletonTheme } from 'react-loading-skeleton'
import MoviesProvider from './Context/MoviesContext'


function App() {


  return (
    <SkeletonTheme baseColor='#313131' highlightColor='#525252'>
      <MoviesProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/pruebas' element={<Pruebas />} />
            <Route path='/' element={<Inicio />} />
            <Route path='/Usuarios' element={<QuienEs />} />
            <Route path='/Home' element={<Home />} />
          </Routes>
        </BrowserRouter>
      </MoviesProvider>
    </SkeletonTheme>

  )
}

export default App
