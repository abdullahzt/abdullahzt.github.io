import React from 'react';
import classes from './Skills.module.css';

import SkillBar from '../../components/UI/SkillBar/SkillBar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faGit, faSwift, faPython, faJs, faHtml5, faCss3, faNode, faAppStore, faNpm } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons'

  
const Skills: React.FC = props => {

    return (
        <div className={classes.Skills} >
            <h2>Languages</h2>
            <div className={classes.Icons} >
                <FontAwesomeIcon icon={faSwift} size="3x" title="Swift"/>
                <FontAwesomeIcon icon={faJs} size="3x" title="Javascript"/>
                <FontAwesomeIcon icon={faHtml5} size="3x" />
                <FontAwesomeIcon icon={faCss3} size="3x" />
                <FontAwesomeIcon icon={faPython} size="3x" />
            </div>
            <h2>Skills</h2>
            <div className={classes.Icons} >
                <FontAwesomeIcon icon={faNode} size="3x" title="Node Js"/>
                <FontAwesomeIcon icon={faAppStore} size="3x" title="iOS Development"/>
                <FontAwesomeIcon icon={faNpm} size="3x" title="Node Package Manager" />
                <FontAwesomeIcon icon={faDatabase} size="3x" title="Database" />
                <FontAwesomeIcon icon={faGit} size="3x" title="Git" />
                <FontAwesomeIcon icon={faReact} size="3x" title="React" />
            </div>
            <h2>Other</h2>
            <div className={classes.Other} >
                <SkillBar>Typescript</SkillBar>
                <SkillBar>Express.js</SkillBar>
                <SkillBar>Mongoose.js</SkillBar>
                <SkillBar>Next.js</SkillBar>
                <SkillBar>GraphQL</SkillBar>
                <SkillBar>JQuery</SkillBar>
                <SkillBar>SwiftUI</SkillBar>
                <SkillBar>ARKit</SkillBar>
                <SkillBar>CoreML</SkillBar>
                <SkillBar>Bootstrap</SkillBar>
                <SkillBar>Redux.js</SkillBar>
                <SkillBar>Rest API</SkillBar>
            </div>
        </div>
    )

}

export default Skills