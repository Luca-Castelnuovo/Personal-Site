import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Analytics from 'components/Analytics';

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
            <Analytics />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/projects" component={Projects} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    );
};

export default App;
