import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import Routes from 'config/Routes';
import './App.scss';

const App = () => {
    useEffect(() => {
        const preloader = document.querySelector('.preloader');
        preloader.classList.add('preloader--hide');
    }, []);

    return <Router>{renderRoutes(Routes)}</Router>;
};

export default App;
