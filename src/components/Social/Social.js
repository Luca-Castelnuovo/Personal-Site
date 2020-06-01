import React from 'react';
import SocialBtn from './SocialBtn';

const Social = () => {
    return (
        <section className="section has-text-centered">
            <div className="container box">
                <div className="buttons is-centered">
                    <SocialBtn type="github" to="/github">
                        GitHub
                    </SocialBtn>
                    <SocialBtn type="linkedin" to="/linkedin">
                        LinkedIn
                    </SocialBtn>
                    <SocialBtn type="instagram" to="/instagram">
                        Instagram
                    </SocialBtn>
                </div>
            </div>
        </section>
    );
};

export default Social;
