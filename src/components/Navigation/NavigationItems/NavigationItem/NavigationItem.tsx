import React from 'react';
import classes from './NavigationItem.module.css';

import { NavLink } from 'react-router-dom';

interface NavItemProps {
    exact: boolean;
    link: string;
}

const NavigationItem: React.FC<NavItemProps> = props => (
    <li className={classes.NavigationItem} >
        <NavLink to={props.link} exact={props.exact} activeClassName={classes.active}>
            {props.children}
        </NavLink>
    </li>
)

export default NavigationItem