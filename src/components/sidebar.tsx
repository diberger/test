import React, {FunctionComponent, useEffect} from 'react'
import {Link, useLocation} from "react-router-dom";
import {IRoute, routes} from "../utils/routes";


export const Sidebar: FunctionComponent = () => {
    const location = useLocation();

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
            <a className="navbar-brand js-scroll-trigger" href="#page-top">
                <span className="d-block d-lg-none">Dimitri BERGER</span>
                <span className="d-none d-lg-block">
        <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="img/profile.jpg" alt=""/>
      </span>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    {routes.map((item: IRoute) => (
                        <li className="nav-item">
                            <Link
                                className={`nav-link js-scroll-trigger ${location.pathname === item.path ? 'active' : ''}`}
                                to={item.path}
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}
