import React from 'react';
import classes from './ContactButton.module.css'

const ContactButton: React.FC = props => (
    <a href="mailTo:abdullahzubair99@gmail.com" className={classes.ContactButton} >
        {props.children}
    </a>
)

export default ContactButton;