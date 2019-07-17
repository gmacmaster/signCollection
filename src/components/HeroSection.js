import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App.css';

class PageSection extends Component {
    render() {
        return (
            <div id="home" className="Page-Section">
                <div className="App-header hero-Image">
                    <div style={{background: 'rgba(0, 0, 0, 0.25)',
                        position: 'absolute',
                        width: '100%',
                        height: '100%',minHeight: '100vh'}}>
                </div>
                    <div style={{height: '100%', width: '100%', zIndex: 999}}>
                        <h3>
                            Hello!
                        </h3>
                        <h1 className="header_title">My Name is Gordon MacMaster</h1>
                        <ul className="social_home list-unstyled text-center">
                            <li className="list-inline-item" style={{margin: '0 10px'}}><a href="https://www.facebook.com/gordomacmaster" target='_blank' rel='noopener noreferrer'><i className="fab fa-facebook fa-2x"></i></a></li>
                            <li className="list-inline-item" style={{margin: '0 10px'}}><a href="https://www.linkedin.com/in/gordon-macmaster" target='_blank' rel='noopener noreferrer'><i className="fab fa-linkedin fa-2x"></i></a></li>
                            <li className="list-inline-item" style={{margin: '0 10px'}}><a href="https://www.instagram.com/gordomacmaster" target='_blank' rel='noopener noreferrer'><i className="fab fa-instagram fa-2x"></i></a></li>
                            <li className="list-inline-item" style={{margin: '0 10px'}}><a href="https://github.com/gmacmaster" target='_blank' rel='noopener noreferrer'><i className="fab fa-github-square fa-2x"></i></a></li>
                            <li className="list-inline-item" style={{margin: '0 10px'}}><a href="https://twitter.com/gordomacmaster" target='_blank' rel='noopener noreferrer'><i className="fab fa-twitter-square fa-2x"></i></a></li>
                        </ul>
                        <div className="header_btn">
                            <a href="../Gordon_MacMaster_Resume.pdf" className="btn btn-outline-custom btn-rounded mt-4" target="blank">View Resume</a>
                        </div>
                    </div>
                </div>
                <div className="scroll_down">
                    <a href="#about" className="scroll">
                        <i className="fas fa-arrow-down" style={{fontSize: '1.5em'}}></i>
                    </a>
                </div>
            </div>
        );
    }
}

PageSection.propTypes = {
    sectionID: PropTypes.string.isRequired,
};

export default PageSection;
