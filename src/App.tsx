import React from 'react';
import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
 
import HomePage from './Pages/Home.page' 

function App() {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="*" element={ <Navigate to="/" /> } />
    </Routes>
  )
}

export default App;
