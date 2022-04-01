import React from "react";
import './App.css'
import Home from "./components/Home";
import Login from "./components/Login";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomeHeader from "./components/HomeHeader";
import HomeThreeColumns from "./components/HomeThreeColumns";

function App() {
  return (
      <Router>
        <HomeHeader />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/Home' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/HomeThreeColumns' element={<HomeThreeColumns />}/>
        </Routes>
      </Router>
  );
}

export default App;
