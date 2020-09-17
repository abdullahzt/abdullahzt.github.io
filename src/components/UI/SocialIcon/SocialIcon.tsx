import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './SocialIcon.module.css';

interface IconProps {
    icon: IconDefinition;
    href: string
}

const SocialIcon: React.FC<IconProps> = props => (
    <a rel="noopener noreferrer" className={classes.Icon} href={props.href} target="_blank" > 
        <FontAwesomeIcon icon={props.icon} size="3x" />
    </a>
)

export default SocialIcon;