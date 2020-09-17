import React from 'react';
import classes from './Contact.module.css';

import ContactButton from '../../components/UI/ContactButton/ContactButton';
import SocialIcon from '../../components/UI/SocialIcon/SocialIcon';

import { faInstagramSquare, faLinkedin, faGithubSquare, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';

const Contact: React.FC = props => {

    return (
        <div className={classes.Contact} >
            <h1>Contact me</h1>
            <h2>I'd Love to hear from you!</h2>
            <ContactButton>
                GET IN TOUCH!
            </ContactButton>
            <h2>
                Or, Hire me on <a rel="noopener noreferrer" href="https://www.upwork.com/freelancers/~01518e346ce0fe261d" target="_blank" >Upwork</a>
            </h2>
            <div className={classes.SocialIcon} >
                <SocialIcon href="https://www.instagram.com/abdullahz.0/" icon={faInstagramSquare} />
                <SocialIcon href="https://www.linkedin.com/in/abdullah-zubair-tanwir-623b311a4/" icon={faLinkedin} />
                <SocialIcon href="https://github.com/abdullahzt" icon={faGithubSquare} />
                <SocialIcon href="https://www.facebook.com/abdullah.zubair.5872/" icon={faFacebookSquare} />
            </div>
            
        </div>
    )

}

export default Contact