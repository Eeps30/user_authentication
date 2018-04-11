import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route } from 'react-router-dom';
import Nav from './nav';
import Home from './home';
import AboutUs from './about-us';
import Operatives from './operatives-list';
import SecretDocs from './secret-docs';
import auth from '../hoc/auth';

const App = () => (
    <div className="container">
        <Nav/>

        <Route exact path="/" component={Home}/>
        <Route exact path="/about-us" component={AboutUs}/>
        <Route exact path="/secret-docs" component={auth(SecretDocs)}/>
        <Route exact path="/operatives-list" component={Operatives}/>

    </div>
);

export default App;
