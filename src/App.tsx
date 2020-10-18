import React, {FunctionComponent, useEffect, useState} from 'react';
import './App.css';
import {Sidebar} from './components/sidebar';
import './scss/resume.scss'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import {IRoute, routes} from "./utils/routes";
import ScrollComponent from "./components/ScrollComponent";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const App: FunctionComponent = () => {
    const routesSorted: IRoute[] = [...routes].sort((a: any, b: any) => a.isMain ? 1 : 0)


    return (
        <Router>
            <Sidebar/>
            <ScrollComponent routesSorted={routesSorted}/>
        </Router>
    );
}

export default App;
