import React from 'react';
import classes from './NavigationItems.module.css';

import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems: React.FC = props => (
    <ul className={classes.NavigationItems} >
        <NavigationItem exact link={"/"} >About</NavigationItem>
        <NavigationItem exact link={"/skills"}>Skills</NavigationItem>
        <NavigationItem exact link={"/work"}>Work</NavigationItem>
        <NavigationItem exact link={"/contact"}>Contact</NavigationItem>
    </ul>
)

export default NavigationItems;