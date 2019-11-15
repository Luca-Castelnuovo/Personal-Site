import React from 'react';
import ContactInput from './ContactInput';
import ContactText from './ContactText';

const Contact = () => {
    return (
        <section className="section">
            <div className="container box">
                <h1 className="title has-text-centered">Contact Me</h1>
                <div className="columns is-centered">
                    <div className="column is-half">
                        <form action="/" className="form">
                            <ContactInput title="Name" errorMessage="123" />
                            <ContactInput title="Email" />
                            <ContactText title="Message" />
                            <div className="field">
                                <p className="control">
                                    <button className="button is-primary is-rounded is-medium">
                                        Submit
                                    </button>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
