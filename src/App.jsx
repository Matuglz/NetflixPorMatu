import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Inicio from './Inicio/Inicio'
import QuienEs from './QuienEs/QuienEs'
import Home from './Home/Home'
import Loader from './Loader/Loader'


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/pruebas' element={<Loader/>}/>
        <Route path='/' element={<Inicio />} />
        <Route path='/Usuarios' element={<QuienEs />} />
        <Route path='/Home' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
