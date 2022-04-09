import React from 'react';
import svg from '../assets/svg/Decoration.svg'
import shirt from '../assets/svg/Icon-1.svg'
import bag from '../assets/svg/Icon-2.svg'
import loop from '../assets/svg/Icon-3.svg'
import retur from '../assets/svg/Icon-4.svg'
import {Link} from "react-router-dom";

const HomeSimpleSteps = () => {
    return (
        <section className='HomeSimpleSteps__container'>
            <div className='HomeSimpleSteps__content'>
                <div className='HomeSimpleSteps__content--Title'>
                    <p>Wystarczą 4 proste kroki</p>
                </div>
                <div className="HomeSimpleSteps__content--Decoration">
                    <img src={svg} alt='decoration'/>
                </div>
                <article className='HomeSimpleSteps__content__article'>
                    <div className='HomeSimpleSteps__content__article--shirt'>
                        <img src={shirt} alt='shirt'/>
                        <p>Wybierz rzeczy</p>
                        <hr></hr>
                        <p>ubrania, zabawki, sprzęt i inne</p>
                    </div>
                    <div className='HomeSimpleSteps__content__article--bag'>
                        <img src={bag} alt='bag'/>
                        <p>Spakuj je</p>
                        <hr></hr>
                        <p>skorzystaj z worków na śmieci</p>
                    </div>
                    <div className='HomeSimpleSteps__content__article--loop'>
                        <img src={loop} alt='loop'/>
                        <p>Zdecyduj komu chcesz pomóc</p>
                        <hr></hr>
                        <p>wybierz zaufane miejsce</p>
                    </div>
                    <div className='HomeSimpleSteps__content__article--return'>
                        <img src={retur} alt='return'/>
                        <p>Zamów kuriera</p>
                        <hr></hr>
                        <p>kurier przyjedzie w dogodnym terminie</p>
                    </div>
                </article>
                <div className='HomeSimpleSteps__content--give'>
                    <p><Link to='/Zaloguj'>Oddaj rzeczy</Link></p>
                </div>
            </div>
        </section>
    );
};

export default HomeSimpleSteps;