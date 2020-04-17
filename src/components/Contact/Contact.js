import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import classnames from 'classnames';
import MailJS from 'mailjs-sdk';
import MailJSConfig from 'config/MailJS';

import ContactInput from './ContactInput';
import ContactText from './ContactText';

const Contact = () => {
    const [isSubmitted, setSubmitted] = useState(false);
    const { register, handleSubmit, errors, formState } = useForm({
        mode: 'onBlur',
    });

    const onSubmit = async (data) => {
        MailJS.send(MailJSConfig.access_token, data).then(
            (response) => {
                setSubmitted(true);
            },
            (error) => {
                console.error('Error: ' + error);
            }
        );
    };

    const btnClass = classnames('button is-primary is-rounded is-medium', {
        'is-loading': formState.isSubmitting,
    });

    return (
        <section className="section">
            <div data-aos="fade-up" className="container box">
                <h1 data-aos="zoom-in" className="title has-text-centered">
                    Contact Me
                </h1>
                <div className="columns is-centered">
                    <div className="column is-half">
                        {isSubmitted && (
                            <div className="notification is-primary has-text-centered">
                                <h1 className="title">
                                    Message sent succesfully!
                                </h1>
                            </div>
                        )}

                        {!isSubmitted && (
                            <form
                                onSubmit={handleSubmit(onSubmit)}
                                className="form"
                            >
                                <ContactInput
                                    title="Name"
                                    register={register}
                                    settings={{
                                        required: 'Name is required',
                                        minLength: {
                                            value: 4,
                                            message: 'Minimum length is 4',
                                        },
                                        maxLength: {
                                            value: 64,
                                            message: 'Maximum length is 64',
                                        },
                                    }}
                                    error={errors.Name}
                                />

                                <ContactInput
                                    title="Email"
                                    register={register}
                                    settings={{
                                        required: 'Email is required',
                                        pattern: {
                                            value: /^\S+@\S+$/i,
                                            message: 'Email must be valid',
                                        },
                                    }}
                                    error={errors.Email}
                                />

                                <ContactText
                                    title="Message"
                                    register={register}
                                    settings={{
                                        required: 'Message is required',
                                        minLength: {
                                            value: 25,
                                            message: 'Minimum length is 25',
                                        },
                                    }}
                                    error={errors.Message}
                                />
                                <div className="field">
                                    <p className="control">
                                        <button
                                            type="submit"
                                            className={btnClass}
                                        >
                                            Submit
                                        </button>
                                    </p>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
