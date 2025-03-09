
import Navegador from './components/common/Navegador'
// import './App.css'
import Main from './components/common/Main'
import Footer from './components/common/footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Index from './components/Index'
import { Error404 } from './components/page/Error404'
import Nosotros from './components/page/Nosotros'
import Administrador from './components/page/Administrador'
import { useState } from 'react'
function App() {
  const usuario=JSON.parse(sessionStorage.getItem("streaming"))||[]
  const [logeado,setLogeado]=useState(usuario)
  return (
    <>
    <BrowserRouter>
    <Navegador logeado={logeado} ></Navegador>
    <Routes>
    <Route path='/' element={<Main setLogeado={setLogeado}></Main>}></Route>
    <Route path='/nosotros' element={<Nosotros></Nosotros>}></Route>
    <Route path='/error' element={<Error404></Error404>}></Route>
    <Route path='/admin' element={<Administrador></Administrador>}></Route>
    </Routes>
     <Footer></Footer>
    </BrowserRouter>
    
   
    
    </>
  )
}

export default App
