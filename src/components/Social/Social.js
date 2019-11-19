import React from 'react';
import SocialBtn from './SocialBtn';

const Social = () => {
    return (
        <section className="section has-text-centered ">
            <div data-aos="fade-up" className="container box">
                <div className="buttons is-centered">
                    <SocialBtn
                        type="github"
                        to="https://castelnuovo.xyz/github"
                    >
                        GitHub
                    </SocialBtn>
                    <SocialBtn
                        type="linkedin"
                        to="https://castelnuovo.xyz/linkedin"
                    >
                        LinkedIn
                    </SocialBtn>
                    <SocialBtn
                        type="instagram"
                        to="https://castelnuovo.xyz/instagram"
                    >
                        Instagram
                    </SocialBtn>
                </div>
            </div>
        </section>
    );
};

export default Social;
