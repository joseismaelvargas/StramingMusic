
import Navegador from './common/Navegador'
// import './App.css'
import Main from './common/Main'
import Footer from './common/footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Index from './components/Index'
import Nosotros from './page/Nosotros'
function App() {

  return (
    <>
    <BrowserRouter>
    <Navegador></Navegador>
    <Routes>
    <Route path='/' element={<Main></Main>}></Route>
    <Route path='/admin' element={<Nosotros></Nosotros>}></Route>
    </Routes>
     <Footer></Footer>
    </BrowserRouter>
    
   
    
    </>
  )
}

export default App
