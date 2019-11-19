import React from 'react';
import PropTypes from 'prop-types';

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

ContactText.propTypes = {
    title: PropTypes.string.isRequired,
    register: PropTypes.any.isRequired,
    settings: PropTypes.object.isRequired,
    error: PropTypes.object
};

export default ContactText;
