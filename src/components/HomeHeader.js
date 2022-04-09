import React from "react";
import {Link} from "react-router-dom";
import img from "../assets/images/Home-Hero-Image.jpg";
import svg from "../assets/svg/Decoration.svg";

function HomeHeader() {
    return (
        <section
            className="home__header__container"
            style={{
                backgroundImage: `url(${img})`,
                height: '100vh',
                backgroundSize: 'contain',
                backgroundRepeat: "no-repeat",
                backgroundPosition: '-450px'
            }}
        >
            <div className="home__header">
                <div className="home__header__log">
                    <ul>
                        <li><Link to="/Zaloguj">Zaloguj</Link></li>
                        <li><span><Link to="/Zaloz-konto">Załóż konto</Link></span></li>
                    </ul>
                    <div className="home__header__nav">
                        <nav>
                            <ul>
                                <li><span><Link to="/">Start</Link></span></li>
                                <li><Link to="/O-co-chodzi?">O co chodzi?</Link></li>
                                <li><Link to="/O-nas">O nas</Link></li>
                                <li><Link to="/Fundacja-i-organizacje">Fundacja i organizacje</Link></li>
                                <li><Link to="/Kontakt">Kontakt</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="rightPosition">
                    <div className="home__header__description">
                        <p><span>Zacznij pomagać!</span> Oddaj niechciane rzeczy w zaufane ręce</p>
                    </div>
                    <div className="home__header__description__svg">
                        <img src={svg} alt="decoration"/>
                    </div>
                    <div className="home__header__description__things">
                        <div className="home__header__description__things__box1">
                            <p><Link to="/Oddaj-rzeczy"><span>Oddaj</span> rzeczy</Link></p>
                        </div>
                        <div className="home__header__description__things__box2">
                            <p><Link to="/Zorganizuj-zbiorke"><span>Zorganizuj</span> zbiórkę</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeHeader;
