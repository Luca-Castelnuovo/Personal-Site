import React from 'react';
import image from 'Assets/hero.jpg';

const Hero = () => {
    return (
        <section className="hero is-primary is-bold">
            {/* <img
                src={image}
                alt="Hero || Luca Castelnuovo"
                className="hero-background"
            /> */}

            <div className="hero-body">
                <div className="container">
                    <h1 className="title has-text-white">
                        Welkom bij Het Hak Hout
                    </h1>
                    <h2 className="subtitle has-text-white">
                        Natuuractiviteiten, Shinrin-Yoku en Wandelingen
                    </h2>
                </div>
            </div>
        </section>
    );
};

export default Hero;
