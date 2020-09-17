import React from 'react';
import classes from './SkillBar.module.css';

const SkillBar: React.FC = props => (
    <div className={classes.SkillBar} >
        {props.children}
    </div>
)

export default SkillBar