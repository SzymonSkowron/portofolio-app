import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import OCoChodzi from "./components/O-co-chodzi";
import ONas from "./components/O-nas";
import FundacjaIOrganizacje from "./components/Fundacja-i-organizacje";
import Kontakt from "./components/Kontakt";
import './App.css'


function App() {
  return (
    <Router>
          <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/Zaloguj' element={<Login />}/>
              <Route path='/Zaloz-konto' element={<Register />}/>
              <Route path='/O-co-chodzi' element={<OCoChodzi />}/>
              <Route path='/O-nas' element={<ONas />}/>
              <Route path='/Fundacja-i-organizacje' element={<FundacjaIOrganizacje />}/>
              <Route path='/Kontakt' element={<Kontakt />}/>
              <Route path='/Oddaj-rzeczy' element={<Login />}/>
              <Route path='/Zorganizuj-zbiorke' element={<Login />}/>
          </Routes>
    </Router>
  );
}

export default App;
