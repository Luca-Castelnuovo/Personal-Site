import React from 'react';

const ContactText = ({ title, register, settings, error }) => {
    return (
        <div className="field">
            <label className="label  is-medium">{title}</label>
            <div className="control has-icons-right">
                <textarea
                    name={title}
                    placeholder={title}
                    ref={register(settings)}
                    className={`textarea is-medium ${error && 'is-danger'}`}
                ></textarea>

                {error && (
                    <span className="icon is-small is-right">
                        <i className="fas fa-exclamation-triangle"></i>
                    </span>
                )}
            </div>
            {error && <p className="help is-danger">{error.message}</p>}
        </div>
    );
};

export default ContactText;
