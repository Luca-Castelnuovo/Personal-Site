import React from 'react';
import SocialBtn from './SocialBtn';

const Social = () => {
    return (
        <section className="section has-text-centered ">
            <div data-aos="fade-up" className="container box">
                <div className="buttons is-centered">
                    <SocialBtn
                        type="github"
                        to="https://github.com/Luca-Castelnuovo"
                    >
                        GitHub
                    </SocialBtn>
                    <SocialBtn
                        type="linkedin"
                        to="https://www.linkedin.com/in/ltcastelnuovo"
                    >
                        LinkedIn
                    </SocialBtn>
                    <SocialBtn
                        type="instagram"
                        to="https://instagram.com/ltcastelnuovo"
                    >
                        Instagram
                    </SocialBtn>
                </div>
            </div>
        </section>
    );
};

export default Social;
