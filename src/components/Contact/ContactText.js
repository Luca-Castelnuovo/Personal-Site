import React from 'react';

const ContactText = ({ title, onChange, value, errorMessage }) => {
    return (
        <div className="field">
            <label className="label  is-medium">{title}</label>
            <div className="control has-icons-right">
                <textarea
                    className={`textarea is-medium ${errorMessage &&
                        'is-danger'}`}
                    placeholder={title}
                >
                    {value}
                </textarea>

                {errorMessage && (
                    <span className="icon is-small is-right">
                        <i className="fas fa-exclamation-triangle"></i>
                    </span>
                )}
            </div>
            {errorMessage && <p className="help is-danger">{errorMessage}</p>}
        </div>
    );
};

export default ContactText;
