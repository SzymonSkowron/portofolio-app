import React from "react";
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import img from "../assets/images/Home-Hero-Image.jpg";
import svg from "../assets/svg/Decoration.svg";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import OCoChodzi from "./O-co-chodzi";
import ONas from "./O-nas";
import FundacjaIOrganizacje from "./Fundacja-i-organizacje";
import Kontakt from "./Kontakt";


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
                    <li><Link to="/Zaloguj">Zaloguj</Link></li>
                    <li><span><Link to="/Załóż-konto">Załóż konto</Link></span></li>
                </ul>
            </div>
            <div className="home__header__nav">
                <nav>
                    <ul>
                        <li><span><Link to="/">Start</Link></span></li>
                        <li><Link to="/O-co-chodzi?">O co chodzi?</Link></li>
                        <li><Link to="/O-nas">O nas</Link></li>
                        <li><Link to="/Fundacja-i-oragnizacje">Fundacja i organizacje</Link></li>
                        <li><Link to="/Kontakt">Kontakt</Link></li>
                    </ul>
                </nav>
            </div>
                    <div className="home__header__description">
                        <p><span>Zacznij pomagać!</span> Oddaj niechciane rzeczy w zaufane ręce</p>
                    </div>
                    <div className="home__header__description__svg">
                        <img src={svg}/>
                    </div>
                    <div className="home__header__description__things">
                        <div className="home__header__description__things__box1">
                            <p><Link to="/Oddaj-rzeczy"><span>Oddaj</span> rzeczy</Link></p>
                        </div>
                        <div className="home__header__description__things__box2">
                            <p><Link to="/Zorganizuj-zbiórkę"><span>Zorganizuj</span> zbiórkę</Link></p>
                        </div>
                    </div>
                </div>
            </div>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/Zaloguj' element={<Login />}/>
                <Route path='/Załóż-konto   ' element={<Register />}/>
                <Route path='/O-co-chodzi' element={<OCoChodzi />}/>
                <Route path='/O-nas' element={<ONas />}/>
                <Route path='/Fundacja-i-organizacje' element={<FundacjaIOrganizacje />}/>
                <Route path='/Kontakt' element={<Kontakt />}/>
                <Route path='/Oddaj-rzeczy' element={<Login />}/>
                <Route path='/Zorganizuj-zbiórkę' element={<Login />}/>
            </Routes>
        </Router>
    );
}

export default HomeHeader;
