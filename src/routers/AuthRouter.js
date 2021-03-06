import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { LoginScreen } from '../components/auth/LoginScreen.js';
import { RecoveryScreen } from '../components/auth/RecoveryScreen.js';
import { RegisterScreen } from '../components/auth/RegisterScreen';

console.log('auth router');
export const AuthRouter = () => {
    return (
        <div className="auth__main">
            <div className="auth__box-container">
                <Switch>
                    <Route 
                        exact
                        path="/auth/login"
                        component={ LoginScreen }
                    />

                    <Route 
                        exact
                        path="/auth/register"
                        component={ RegisterScreen }
                    />
                    <Route 
                        exact
                        path="/auth/recovery"
                        component={ RecoveryScreen }
                    />
                </Switch>
            </div>

        </div>
    )
}
