import React from 'react'

import classes from './Home.module.css';
import me from '../../assets/images/me.jpeg';

const Home: React.FC = props => {

    return (
        <div className={classes.About} >
            <img src={me} alt=""/>
            <h1>Abdullah Zubair</h1>
            <h1>iOS and Web Developer</h1>
        </div>
    )

}

export default Home;