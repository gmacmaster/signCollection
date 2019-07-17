import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App.css';

class PageSection extends Component {
    render() {
        return (
            <div className="jumbotron text-center" style={{marginBottom:0}}>
                <ul className="social_home list-unstyled text-center">
                    <li className="list-inline-item" style={{margin: '0 10px'}}><a href="https://www.facebook.com/gordomacmaster" target='_blank' rel='noopener noreferrer' style={{color: 'darkgray'}}><i className="fab fa-facebook fa-2x"></i></a></li>
                    <li className="list-inline-item" style={{margin: '0 10px'}}><a href="https://www.linkedin.com/in/gordon-macmaster" target='_blank' rel='noopener noreferrer' style={{color: 'darkgray'}}><i className="fab fa-linkedin fa-2x"></i></a></li>
                    <li className="list-inline-item" style={{margin: '0 10px'}}><a href="https://www.instagram.com/gordomacmaster" target='_blank' rel='noopener noreferrer' style={{color: 'darkgray'}}><i className="fab fa-instagram fa-2x"></i></a></li>
                    <li className="list-inline-item" style={{margin: '0 10px'}}><a href="https://github.com/gmacmaster" target='_blank' rel='noopener noreferrer' style={{color: 'darkgray'}}><i className="fab fa-github-square fa-2x"></i></a></li>
                    <li className="list-inline-item" style={{margin: '0 10px'}}><a href="https://twitter.com/gordomacmaster" target='_blank' rel='noopener noreferrer' style={{color: 'darkgray'}}><i className="fab fa-twitter-square fa-2x"></i></a></li>
                </ul>
                <ul className="social_home list-unstyled text-center">
                    <li className="list-inline-item" style={{margin: '0 10px', color: 'darkgray'}}><i className="far fa-copyright"></i>2019 Gordon MacMaster</li>
                </ul>
            </div>
        );
    }
}

PageSection.propTypes = {
    sectionID: PropTypes.string.isRequired,
};

export default PageSection;
