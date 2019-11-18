import React from 'react';
import useForm from 'react-hook-form';
import classnames from 'classnames';

import ContactInput from './ContactInput';
import ContactText from './ContactText';

const Contact = () => {
    const { register, handleSubmit, errors, formState } = useForm({
        mode: 'onBlur'
    });

    const onSubmit = async data => {
        const url = 'https://api.emailjs.com/api/v1.0/email/send';
        const payload = {
            user_id: 'user_DOxZrk2OBIK8rsQIuL85c',
            service_id: 'sendgrid',
            template_id: 'contact',
            template_params: data
        };

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
            .then(data => {
                console.log('Request success: ', data);
            })
            .catch(error => {
                console.log('Oops... ' + error);
            });
    };

    const btnClass = classnames('button is-primary is-rounded is-medium', {
        'is-loading': formState.isSubmitting
    });

    return (
        <section className="section">
            <div className="container box">
                <h1 className="title has-text-centered">Contact Me</h1>
                <div className="columns is-centered">
                    <div className="column is-half">
                        {formState.isSubmitted && (
                            <div className="notification is-primary has-text-centered">
                                <h1 className="title">
                                    Message sent succesfully!
                                </h1>
                            </div>
                        )}

                        {!formState.isSubmitted && (
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
                                            message: 'Minimum length is 4'
                                        },
                                        maxLength: {
                                            value: 64,
                                            message: 'Maximum length is 64'
                                        }
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
                                            message: 'Email must be valid'
                                        }
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
                                            message: 'Minimum length is 25'
                                        }
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
