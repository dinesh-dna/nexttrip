import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route} from 'react-router-dom'
import {Provider} from 'react-redux';
import store from '../src/store';
import {App, Container} from '../src/utils/styles';
import {Header} from '../src/components/Header';
import NextTripHomePage from './pages/Home';
import DepartureSchedules from './pages/DepartureSchedules';

ReactDOM.render(
    <Provider store={store}>
        <App>
            <Container>
                <BrowserRouter>
                    <Header />
                    <Route exact path='/' component={NextTripHomePage} /> 
                    <Route path='/nextTrip' render={props => <DepartureSchedules {...props}/> } />
                </BrowserRouter>
            </Container>
        </App>
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
