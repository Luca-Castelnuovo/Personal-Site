import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Redirects from 'config/Redirects';

const RedirectRoute = ({ match }) => {
    const [redirecting, setRedirecting] = useState(false);
    const src = Redirects[match.params.src];

    useEffect(() => {
        if (src) {
            window.open(src);
        }

        setRedirecting(true);
    }, [src]);

    return (
        <>
            {redirecting && <Redirect to="/" />}
            <h1>Redirecting...</h1>
        </>
    );
};

RedirectRoute.propTypes = {
    match: PropTypes.object.isRequired
};

export default RedirectRoute;
