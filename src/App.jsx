import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Inicio from './Inicio/Inicio'
import QuienEs from './QuienEs/QuienEs'

function App() {


  return (
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/Usuarios' element={<QuienEs/>}/>
      </Routes>
      </BrowserRouter>
  )
}

export default App
