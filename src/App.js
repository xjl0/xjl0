import React from 'react';
import {HashRouter as Router} from 'react-router-dom';
import Layout from "./layouts/Layout";
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/locales/i18n'

const App = () => {
    return (
        <Router>
            <Layout/>
        </Router>
    );
};

export default App;
