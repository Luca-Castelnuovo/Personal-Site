import React from 'react';
import SocialBtn from './SocialBtn';

const Social = () => {
    return (
        <section className="section has-text-centered ">
            <div
                data-aos="fade-up"
                className="container box aos-init aos-animate"
            >
                <div className="buttons is-centered">
                    <SocialBtn type="github">GitHub</SocialBtn>
                    <SocialBtn type="linkedin">LinkedIn</SocialBtn>
                    <SocialBtn type="instagram">Instagram</SocialBtn>
                </div>
            </div>
        </section>
    );
};

export default Social;
