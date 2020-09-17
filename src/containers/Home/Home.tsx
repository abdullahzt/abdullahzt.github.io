import React from 'react'

import classes from './Home.module.css';
import me from '../../assets/images/me.jpeg';
import './Home.scss';

const Home: React.FC = props => {

    return (
        <React.Fragment>
        <div className={classes.About} >
            <img src={me} alt=""/>
            <h1 style={{ marginBottom: '0px' }} >Abdullah Zubair</h1>
            <div className={classes.Develop} >
            <div className="content">
                <div className="content__container">
                    {/* <p className="content__container__text">
                        Hello
                    </p> */}
                    <ul className="content__container__list">
                        <li className="content__container__list__item">Web</li>
                        <li className="content__container__list__item">iOS</li>
                        <li className="content__container__list__item">Web</li>
                        <li className="content__container__list__item">iOS</li>
                    </ul>
                </div>
            </div>
            </div>
            <h1 style={{ marginTop: '25px' }} >Developer.</h1>
            <h2>About</h2>
            <h3>I am an ambitious Software Engineering Student and a driven individual with the ability to adapt different situations and I have potential to grow self.</h3>
        </div>
        </React.Fragment>
    )

}

export default Home;