import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import MapView from './pages/MapView';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/map' element={ <MapView /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
