import React from 'react';
import MapView from './components/MapView';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <MapView/>
    </div>
  );
}

export default App;
