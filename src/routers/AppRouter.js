import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { HomeScreen } from '../components/home/HomeScreen'
import { AuthRouter } from './AuthRouter'

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path='/' component={HomeScreen} />
                    {/* <PrivateRoute exact path='/' component={JournalScreen} isLoggedIn={isLoggedIn} /> */}
                    <Route path='/auth' component={AuthRouter}/>
                    {/* <PublicRoute path='/auth' component={AuthRouter} isLoggedIn={isLoggedIn} /> */}
                </Switch>
            </div>
        </Router>
    )
}
