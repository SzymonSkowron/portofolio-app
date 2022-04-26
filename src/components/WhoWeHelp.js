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
            </div>
        </section>
    );
};

export default WhoWeHelp;