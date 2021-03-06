import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route } from 'react-router-dom';
import Nav from './nav';
import Home from './home';
import AboutUs from './about-us';
import Operatives from './operatives-list';
import SecretDocs from './secret-docs';
import auth from '../hoc/auth';
import SignUp from './sign-up';
import SignIn from './sign-in';
import Quotes from './quotes';

const App = () => (
    <div className="container">
        <Nav/>

        <Route exact path="/" component={Home}/>
        <Route path="/about-us" component={AboutUs}/>
        <Route path="/secret-docs" component={auth(SecretDocs)}/>
        <Route path="/operatives-list" component={Operatives}/>
        <Route path="/sign-up" component={SignUp}/>
        <Route path="/sign-in" component={SignIn}/>
        <Route path="/movie-quote" component={auth(Quotes)}/>
    </div>
);

export default App;
