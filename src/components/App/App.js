import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import Routes from 'config/Routes';
import AOSConfig from 'config/AOS';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.scss';

const App = () => {
    useEffect(() => {
        const preloader = document.querySelector('.preloader');
        preloader.classList.add('preloader--hide');
    }, []);

    AOS.init(AOSConfig);

    return <Router>{renderRoutes(Routes)}</Router>;
};

export default App;
