import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {RutArq} from './RutArq';
import {App} from './App';
import  {About}  from './pages/About';
import { Nav } from "./components/Nav/Nav";
import {Site} from './pages/Site';
import {State} from './pages/State';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <Nav />
        <div className='maincontent'>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/site/:id' element={<Site />} />
          <Route path='/state/:id' element={<State />} />  
          <Route path='/about' element={<About />} />          
        </Routes>
      </div>
      
    </BrowserRouter>
  </React.StrictMode>,
)