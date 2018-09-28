import React, { Component } from 'react';
import FacebookLogo from '../../Components/Icons/Facebook.png';
import InstagramLogo from '../../Components/Icons/Instagram.png';
import TwitterLogo from '../../Components/Icons/Twitter.png';

export class Footer extends Component {
    render() {
        return (
            <div className="d-flex justify-content-between header">
                <p>Connect with us on social media</p>
                <div className="d-flex">
                    <a href="https://www.facebook.com/"><img className="footerIcons" src={FacebookLogo} alt="Facebook logo" /></a>
                    <a href="https://www.instagram.com/"><img className="footerIcons" src={InstagramLogo} alt="Instagram logo" /></a>
                    <a href="https://www.twitter.com/"><img className="footerIcons" src={TwitterLogo} alt="Twitter logo" /></a>
                </div>
            </div>
        )
    }
}

export default Footer
