
import './App.css'
import About from './component/about';
import Footer from './component/Footer'
import Hi from './component/home'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Services from './component/services';
import Finance from './component/Finicialservice';
import Becomeconnector from './component/becomeconnector';
import Contact from './component/contact ';

function App() {

  return (
    <>
    <div>
     
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Hi/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/Finicialservice' element={<Finance/>}/>
      <Route path='/becomeaconnector' element={<Becomeconnector/>}/>
      <Route path='/contacts' element={<Contact/>}/>
     </Routes>
     </BrowserRouter>
      </div>   
    </>
  )
}

export default App
