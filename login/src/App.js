import React from 'react';
import './App.css';
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import Homepage from './Components/Homepage';
import Main  from './Components/Main/Main';
import Shop from './Components/Shop/Shop'
import About from './Components/About/About'

function App() {
  return (
    <>
     <BrowserRouter>
     <Homepage/>
      <Routes>
      <Route path='/' element={<Main></Main>}/>
      <Route path='/about' element={<About></About>}/>
      <Route path='/shop' element={<Shop></Shop>}/>
          {/* <Route path="contact" element={<Contact />} /> */}
          {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
