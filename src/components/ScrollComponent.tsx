import React, {FunctionComponent, useEffect, useState} from 'react';
import {Route, Switch, useHistory, withRouter, RouteComponentProps} from "react-router-dom";
import {IRoute} from "../utils/routes";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {useScroll} from "../hooks/useScroll";

interface ScrollProps extends RouteComponentProps {
    routesSorted: IRoute[],
    location: {
        pathname: string,
        search: string
        state: string,
        hash: string
        key: string
    }
}

type Props = ScrollProps;

const ScrollComponent: FunctionComponent<Props> = ({routesSorted, location}) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const history = useHistory();
    const {scrollDirection, scrollNumber} = useScroll(document.querySelector('.container-fluid'));

    useEffect(() => {
        let localCurrentIndex = currentIndex;

            if (scrollDirection === 'up') {
                localCurrentIndex = currentIndex === 0 ? routesSorted.length - 1 : currentIndex - 1
                setCurrentIndex(localCurrentIndex)
            } else if (scrollDirection === 'down') {
                localCurrentIndex = currentIndex === routesSorted.length - 1 ? 0 : currentIndex + 1
                setCurrentIndex(localCurrentIndex)
            }
            history.push(routesSorted[localCurrentIndex].path);

    }, [ scrollNumber])

    return (
        <div className="container-transition container-fluid p-0">
            <TransitionGroup>
                <CSSTransition
                    key={location.key}
                    timeout={{enter: 0, exit: 0}}
                    classNames={'fade'}
                >
                    <Switch>
                        {routesSorted.map((item: IRoute) => {
                                const Component = item.component;
                                return (
                                    <Route path={item.path}>
                                        <Component/>
                                    </Route>
                                )
                            }
                        )}
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
        </div>
    );
};

export default withRouter(ScrollComponent);
