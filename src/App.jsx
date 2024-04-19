
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Pwishlist from './pages/Pwishlist'
import Pcart from './pages/Pcart'
import Phome from './pages/Phome'

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Phome/>} />
        <Route path='/PWishlist' element={<Pwishlist/>}/>
        <Route path='/Pcart' element={<Pcart/>}/>
      </Routes>
      <Footer/>

    </>
  )
}

export default App
