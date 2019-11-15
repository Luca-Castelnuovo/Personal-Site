import React from 'react';

const Contact = () => {
    return (
        <section className="section has-text-centered">
            <div className="container box">
                <h1 className="title">Contact Me</h1>
                <div className="columns is-centered">
                    <div className="column is-half">
                        <form action="/" className="form">
                            <div className="field-group">
                                <div className="field-item">
                                    <input
                                        name="name"
                                        className="text-input "
                                        type="name"
                                        placeholder="Name*"
                                        value=""
                                    />
                                    <p className="error-container"></p>
                                </div>
                                <div className="field-item">
                                    <input
                                        name="email"
                                        className="text-input "
                                        type="email"
                                        placeholder="Email*"
                                        value=""
                                    />
                                    <p className="error-container"></p>
                                </div>
                                <div className="field-item">
                                    <textarea
                                        name="message"
                                        className="text-area "
                                        placeholder="Message*"
                                    ></textarea>
                                    <p className="error-container"></p>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="button is-primary is-rounded is-medium "
                            >
                                <span>Submit</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
