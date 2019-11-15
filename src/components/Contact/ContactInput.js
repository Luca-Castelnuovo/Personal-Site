import React from 'react';

const ContactInput = ({ title, onChange, value, errorMessage }) => {
    return (
        <div className="field">
            <label className="label is-medium">{title}</label>
            <div className="control has-icons-right">
                <input
                    className={`input is-medium ${errorMessage && 'is-danger'}`}
                    type="text"
                    placeholder={title}
                    value={value}
                />

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

export default ContactInput;
