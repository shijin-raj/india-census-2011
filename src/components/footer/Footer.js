import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react'
import "./Footer.css";
export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <span className='author'>
                    Shijin Raj Arakkan
                </span>
                <div className="footer-contact">
                        <div className='social-icon'><a target="_blank" rel="noreferrer"  href="https://github.com/ShijinRaj0"><span className="social"><FontAwesomeIcon icon={['fab','github']} size="lg" /></span></a></div>
                        <div className='social-icon'><a target="_blank" rel="noreferrer"  href="https://www.linkedin.com/in/shijin-raj-4791a3200"><span className="social"><FontAwesomeIcon icon={['fab','linkedin']} size="lg" /></span></a></div>
                        <div className='social-icon'><a target="_blank" rel="noreferrer"  href="https://facebook.com/shijinraj.arakkan"><span className="social"><FontAwesomeIcon icon={['fab','facebook']} size="lg" /></span></a></div>
                </div>
            </div>
        )
    }
}
