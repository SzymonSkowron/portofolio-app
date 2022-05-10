import React from 'react';
import svg from '../assets/svg/Decoration.svg';

const WhoWeHelp = () => {
    return (
        <section>
            <div className="WhoWeHelp__container">
                <div className="WhoWeHelp__headContent">
                    <div className="WhoWeHelp__headContent--title">
                        <p>
                            Komu pomagamy?
                        </p>
                    </div>
                    <div className="WhoWeHelp__headContent--decoration">
                        <img src={svg} />
                    </div>
                    <div className="WhoWeHelp__headContent--who">
                        <p>
                            Fundacjom
                        </p>
                        <p>
                            Organizacjom pozarządowych
                        </p>
                        <p>
                            Lokalnym zbiórkom
                        </p>
                    </div>
                    <div className="WhoWeHelp__headContent--info">
                        <p>
                            W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy.
                            Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
                        </p>
                    </div>
                </div>
                <div className="WhoWeHelp__foundations">
                    <div className="WhoWeHelp__foundations--health">
                        <p className="WhoWeHelp__foundations--title">
                            Fundacja "Dbam o Zdrowie"
                        </p>
                        <p className="WhoWeHelp__foundations--mission">
                            Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.
                        </p>
                        <p className="WhoWeHelp__foundations--whatGive">
                            ubrania, jedzenie, sprzet AGD, meble, zabawki
                        </p>
                        <hr/>
                    </div>
                    <div className="WhoWeHelp__foundations--kids">
                        <p className="WhoWeHelp__foundations--title">
                            Fundacja "Dla dzieci"
                        </p>
                        <p className="WhoWeHelp__foundations--mission">
                            Cel i misja: Pomoc dzieciom z ubogich rodzin.
                        </p>
                        <p className="WhoWeHelp__foundations--whatGive">
                            ubrania, meble, zabawki
                        </p>
                        <hr/>
                    </div>
                    <div className="WhoWeHelp__foundations--home">
                        <p className="WhoWeHelp__foundations--title">
                            Fundacja "Bez domu"
                        </p>
                        <p className="WhoWeHelp__foundations--mission">
                            Cel i misja: Pomoc dla osób nie posiadajacych miejsa zamieszkania.
                        </p>
                        <p className="WhoWeHelp__foundations--whatGive">
                            ubrania, jedzenie, ciepłe koce
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhoWeHelp;