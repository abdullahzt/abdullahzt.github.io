import React from 'react';
import classes from './ContactButton.module.css'

const ContactButton: React.FC = props => (
    <a href="mailTo:abdullahzubair075@gmail.com" className={classes.ContactButton} >
        {props.children}
    </a>
)

export default ContactButton;