import React, { Component } from 'react';
import PlanetScene from './three/PlanetScene';
import IonIcon from 'react-ionicons';
import $ from 'jquery';
import './App.css';


export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = { buttonState: '' };
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        // Set up scene
        PlanetScene(this.threeRootElement);
        // Add smooth scrolling to all links
    }

    handleClick(event) {
        // Prevent default anchor click behavior
        event.preventDefault();

        if (this.state.buttonState == '') {
            $('html, body').animate({
                scrollTop: $('#content').offset().top
            }, 800, function () {
                window.location.hash = '#content';
            });
            this.setState({ buttonState: ' up' });
        } else {
            $('html, body').animate({
                scrollTop: $('#app').offset().top
            }, 800, function () {
                window.location.hash = '#app';
            });
            this.setState({ buttonState: '' });
        }
    }

    render() {
        return (
            <div className='container-fluid' id='app'>
                <div className='container-fluid header'>
                    <div id='three' ref={element => this.threeRootElement = element}></div>
                </div>
                <div className='row' id='title-container'>
                    <div className='col'>
                        <h1>Bruno Bachmann</h1>
                        <h2>Software Engineer</h2>
                    </div>
                    <div className='col'>
                        <Links />
                    </div>
                </div>
                <div id='arrow-down'>
                    <a href='#content' id='scroll-link'>
                        <button type='button' className={'btn btn-light' + this.state.buttonState} id='btn-arrow-down' onClick={this.handleClick}>
                            <IonIcon type='ionicon' fontSize='4em' icon='ios-arrow-down' id='arrow-icon' />
                        </button>
                    </a>
                </div>
                <div className='container'>
                    <div className='row'>
                        <a id='content'></a>
                        <div className='col' id='info'>
                            <Projects />
                            <Experience />
                            <Education />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


class Links extends Component {
    render() {
        return (
            <div id='links'>
                <a className='hvr-backward' href='https://twitter.com/bfbachmann'>
                    <IonIcon type='ionicon' fontSize='2em' icon='logo-twitter' />
                </a><br />
                <a className='hvr-backward' href='https://github.com/bfbachmann'>
                    <IonIcon type='ionicon' fontSize='2em' icon='logo-github' />
                </a><br />
                <a className='hvr-backward' href='https://www.linkedin.com/in/bfbachmann'>
                    <IonIcon type='ionicon' fontSize='2em' icon='logo-linkedin' />
                </a><br />
                <a className='hvr-backward' href='mailto:bfbachmann@gmail.com'>
                    <IonIcon type='ionicon' fontSize='2em' icon='ios-mail' />
                </a>
            </div>
        );
    }
}


class Projects extends Component {
    render() {
        return (
            <div id='projects'>
                <h3>Projects</h3>
                <h5>Cumulus</h5>
                <h5>Silver Screen</h5>
            </div>
        );
    }
}


class Experience extends Component {
    render() {
        return (
            <div id='experience'>
                <h3>Experience</h3>
                <h5>
                    <span>Co-president </span>
                    <span className='org'>| UBC Launch Pad</span>
                </h5>
                <h5>
                    <span>Intern, Software Engineer </span>
                    <span className='org'>| Demonware</span>
                </h5>
                <h5>
                    <span>Intern, Agile Developer </span>
                    <span className='org'>| SAP</span>
                </h5>
                <h5>
                    <span>Intern, Web Developer </span>
                    <span className='org'>| UBC Faculty of Education</span>
                </h5>
            </div>
        );
    }
}


class Education extends Component {
    render() {
        return (
            <div id='education'>
                <h3>Education</h3>
                <h5>
                    <span>Computer Engineering </span>
                    <span className='org'>| The University of British Columbia</span>
                </h5>
            </div>
        );
    }
}
