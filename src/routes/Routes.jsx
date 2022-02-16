import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Home from '../pages/Home'
import History from '../pages/History'

import Follow from '../pages/Follow'

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/history' component={History}/>
            <Route path='/follow' component={Follow}/>
         
        </Switch>
    )
}

export default Routes
