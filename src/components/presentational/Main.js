import React from 'react';
import { Switch, Route } from 'react-router-dom'
import ProductsList from '../container/ProductsList'
import Home from '../container/Home'

export default () => {
    return (
        <main className="content" role="main">
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/products' component={ProductsList} />
            </Switch>
        </main>
    );
}