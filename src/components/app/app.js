import React from 'react';
import {MainPage, CartPage, ItemPage} from '../pages';
import AppHeader from '../app-header';
import { Route, Switch } from 'react-router-dom';
// import Background from './food-bg.jpg';
import './app.css'

const App = () => {
    return (
        <div className="app">
            <AppHeader/>
            <Switch>
                <Route path = '/' exact component={MainPage}/>
                <Route path = '/cart' component={CartPage}/>
                <Route path = '/menu/:id'  component={ItemPage}/>
                <Route exact component={MainPage}/>
            </Switch>
        </div>
    )
}

export default App;