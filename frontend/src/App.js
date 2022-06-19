import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './content/home/home';
import About from './content/about/about';


const App = () => {
  return(
      <Routes>
        <Route path='/' element={<Home />} />
        <Routes path='about' element={<About />} />
      </Routes>
  )
}

export default App;