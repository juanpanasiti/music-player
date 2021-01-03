import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';

export const AuthRouter = () => {
    return (
        <div>
            <Switch>
                <Route path='/auth/register' component={RegisterScreen} />
                <Route path='/auth/login' component={LoginScreen} />

                <Redirect to='/auth/login' />
            </Switch>
        </div>
    );
};
