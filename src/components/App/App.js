import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from 'routes/Home';
import Projects from 'routes/Projects';
import NotFound from 'routes/NotFound';

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

    return (
        <Router>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/projects">
                <Projects />
            </Route>
            <Route path="">
                <NotFound />
            </Route>
        </Router>
    );
};

export default App;
