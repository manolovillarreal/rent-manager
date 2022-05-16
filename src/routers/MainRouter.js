import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";

import { auth } from "../firebase/firebaseConfig";
import { AuthRouter } from './AuthRouter';
import { login } from '../actions/auth';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { DashboardScreen } from '../components/Dashboard/DashboardScreen'
import { AppRouter } from "./AppRouter";

export const MainRouter = () => {
    const dispatch = useDispatch();

    const [ checking, setChecking ] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        auth.onAuthStateChanged(async(user) => {
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName, user.photoURL));
                setIsLoggedIn(true);
                //dispatch para cargar informacion
            } else {
                setIsLoggedIn(false);
            }
            setChecking(false);

        });
    }, [dispatch, setIsLoggedIn])

    if ( checking ) {
        return (
            <h1>Wait...</h1>
        )
    }

    return (
        <Router>
            <Switch>
            <PublicRoute 
                        path="/auth"
                        component={ AuthRouter}
                        isAuthenticated={ isLoggedIn }
                    />

                    <PrivateRoute 
                        exact
                        isAuthenticated={ isLoggedIn }
                        path="/"
                        component={ AppRouter }
                    />

                    <Redirect to="/auth/login" />
            </Switch>
        </Router>
    );

}