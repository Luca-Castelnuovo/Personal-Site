import React from 'react';
import SocialBtn from './SocialBtn';

const Social = () => {
    return (
        <section className="section has-text-centered ">
            <div className="container box">
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
