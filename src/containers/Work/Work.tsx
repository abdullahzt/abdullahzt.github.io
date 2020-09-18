import React from 'react';
import classes from './Work.module.css';

const Work: React.FC = props => {

    return (
        <div className={classes.Work} >
            <h1>Recent Work</h1>
            <div className={classes.WorkItem} >
                <h2>Shopit - Ecommerce Single page webapp</h2>
                <h3>Ecommerce Website made using React and Redux. Firebase Rest API used for backend.</h3>
                <h3>Users can make an account and place their orders.</h3>
                <a rel="noopener noreferrer" target="_blank"  href="https://github.com/abdullahzt/shop-it">Github Link</a>
                <a rel="noopener noreferrer" target="_blank"  href="https://shop-it-ff797.web.app/">Deployed</a>
            </div>
            <div className={classes.WorkItem} >
                <h2>ARStudy - Augmented Reality iOS app</h2>
                <h3>iOS app made using ARKit 2 which makes experience with books rich with the help of AR.</h3>
                <h3>Users can view notes, video related to pictures and 3d models for diagrams in AR.</h3>
                <a rel="noopener noreferrer" target="_blank"  href="https://github.com/abdullahzt/ARStudy">Github Link</a>
            </div>
        </div>
    )

}

export default Work;