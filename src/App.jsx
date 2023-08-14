import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Inicio from './Inicio/Inicio'
import QuienEs from './QuienEs/QuienEs'
import HomeHeader from './HomeHeader/HomeHeader'
import Home from './Home/Home'
import Nav from './Nav/Nav'


function App() {


  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/pruebas' element={<HomeHeader />} />
        <Route path='/' element={<Inicio />} />
        <Route path='/Usuarios' element={<QuienEs />} />
        <Route path='/Home' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
