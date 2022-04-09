import React from 'react';
import decoration from '../assets/svg/Decoration.svg';
import signature from '../assets/svg/Signature.svg';
import people from '../assets/images/People.jpg';

const AboutUs = () => {
    return (
        <section className='AboutUs__container'>
            <div className='AboutUs__content'>
                <div className='AboutUs__content--title'>
                    <p>O nas</p>
                </div>
                <div className='AboutUs__content--decoration'>
                    <img src={decoration} alt='decoration'/>
                </div>
                <div className='AboutUs__content--description'>
                    <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery.
                        Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.
                    </p>
                </div>
                <div className='AboutUs__content--signature'>
                    <img src={signature} alt='signature'/>
                </div>
            </div>
            <div className='AboutUs__img'>
                <img src={people} alt='people'/>
            </div>
        </section>
    );
};

export default AboutUs;