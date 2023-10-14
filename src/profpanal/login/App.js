import React from 'react';
import Login from './login/Login';
import CHoix from './login/Choisx'
import { Route, Routes } from 'react-router-dom';
import NotFound from './login/NotFound';
import Login1 from './login/Login1'
import Login2 from './login/Login2'
import Login3 from './login/Login3';
import Home from './login/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      

      <Routes>
      <Route path="/Alogin" element={<Login/>} />
      <Route path="/Slogin" element={<Login1 />} />
      <Route path="/Plogin" element={<Login2 />} />
      <Route  path="/Tlogin" element={<Login3 />} />
      <Route path="/Home" element={<Home />} />

      <Route path="/" element={<CHoix />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
