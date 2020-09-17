import React from 'react';

import classes from './Toolbar.module.css'

import NaviationItems from '../NavigationItems/NavigationItems';

const Toolbar: React.FC = props => (
    <header className={classes.Toolbar} >
        <NaviationItems/>    
    </header>
)

export default Toolbar;