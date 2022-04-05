import React from "react";
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import img from "../assets/images/Home-Hero-Image.jpg"
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";


function HomeHeader() {
    return (
        <Router>
            <div className="home__header__container">
            <div className="home__background__img">
                <img src={img} alt="box with things"/>
            </div>
                <div className="home__header">
            <div className="home__header__log">
                <ul>
                    <li><Link to="/logowanie">Zaloguj</Link></li>
                    <li><span><Link to="/rejestracja">Załóż konto</Link></span></li>
                </ul>
            </div>
            <div className="home__header__nav">
                <nav>
                    <ul>
                        <li><span><Link to="/">Start</Link></span></li>
                        <li><Link to="/O co chodzi?">O co chodzi?</Link></li>
                        <li><Link to="/O nas">O nas</Link></li>
                        <li><Link to="/Fundacja i oragnizacje">Fundacja i organizacje</Link></li>
                        <li><Link to="/Kontakt">Kontakt</Link></li>
                    </ul>
                </nav>
            </div>
                </div>
            </div>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/logowanie' element={<Login />}/>
                <Route path='/rejestracja' element={<Register />}/>
            </Routes>
        </Router>
    );
}

export default HomeHeader;
