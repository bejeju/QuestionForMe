import React from "react";
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Auth from "./Auth";
import Home from "./Home";
import Profile from "./Profile";
import { useSelector } from 'react-redux';
import Navigation from "../routes/Navigation";
import Calender from "./questions/Calender";

const AppRoute = () => {
    const isLoggedIn = useSelector(state => state.reducerLoggedIn.isLoggedIn);
    return (
        <Router>
            {isLoggedIn && <Navigation/>}
            <Switch>
                    <>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/profile">
                            <Profile />
                        </Route>
                        <Route path="/calender">
                            <Calender />
                        </Route>
                    </> : 
                    <Route exact path="/">
                        <Auth />
                    </Route>
            </Switch>
        </Router>
    )
}

export default AppRoute;