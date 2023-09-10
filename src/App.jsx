import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Inicio from './Inicio/Inicio'
import QuienEs from './QuienEs/QuienEs'
import Home from './Home/Home'
import Pruebas from './Prubas/Pruebas'
import { SkeletonTheme } from 'react-loading-skeleton'
import MoviesProvider from './Context/MoviesContext'
import AgregarUsuario from './AgregarUsuario/AgregarUsuario'
import AdministrarPerfiles from './AdministrarPerfiles/AdministrarPerfiles'
import EdtarPerfil from './EditarPerfil/EdtarPerfil'


function App() {


  return (
    <SkeletonTheme baseColor='#313131' highlightColor='#525252'>
      <MoviesProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/EditarPerfil' element={<EdtarPerfil/>}/>
            <Route path='/AdministrarPerfiles' element={<AdministrarPerfiles/>}/>
            <Route path='/AgregarUsuario' element={<AgregarUsuario />}/>
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
