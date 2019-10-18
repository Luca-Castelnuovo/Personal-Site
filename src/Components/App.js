import React, { useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import { Reset } from 'styled-reset';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import Routes from 'Config/Routes';
import Background from 'Components/Background';
import Wrapper from 'Components/Wrapper';
import Container from 'Components/Container';
import Inner from 'Components/Inner';

const GlobalStyles = createGlobalStyle`
    * {
        font-family: 'Arial', monospace !important;
        box-sizing: border-box;
    }
    @media (max-width: 1680px) {
        html {
            font-size: 13pt;
        }
    }
`;

const App = () => {
    useEffect(() => {
        const preloader = document.querySelector('.preloader');
        preloader.classList.add('preloader--hide');
    }, []);

    return (
        <Router>
            <Reset />
            <GlobalStyles />
            <Background>
                <Wrapper>
                    <Container>
                        <Inner>{renderRoutes(Routes)}</Inner>
                    </Container>
                </Wrapper>
            </Background>
        </Router>
    );
};

export default App;
