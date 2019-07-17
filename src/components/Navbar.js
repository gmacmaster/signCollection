import React, { Component } from 'react';
import '../App.css';

class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            menuDisplayed: false,
        }
        this.displayMenu = this.displayMenu.bind(this);
    }

    displayMenu(){
        this.setState({menuDisplayed: !this.state.menuDisplayed})
    }

    render() {
        return (
            <nav id="navbar" className="navbar navbar-expand-lg fixed-top custom-nav sticky" style={{zIndex: 9999}}>
                <div className="container">
                    <h1 id='nameHeaderH1'>Gordon</h1>
                    <button className="btn btn-light smallScreenButton" type="button" data-toggle="collapse"
                            data-target="#navbarCollapse" onClick={this.displayMenu}><i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse" style={this.state.menuDisplayed ? {display: 'inline-block'} : {display: 'none'} }>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a href="#home" className="nav-link">Home</a>
                            </li>
                            <li className="nav-item">
                                <a href="#about" className="nav-link">About</a>
                            </li>
                            <li className="nav-item">
                                <a href="#work" className="nav-link">Work</a>
                            </li>
                            <li className="nav-item">
                                <a href="#education" className="nav-link">Education</a>
                            </li>
                            <li className={this.state.contactActive ? "nav-item active" : "nav-item"}>
                                <a href="#contact" className="nav-link">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;
