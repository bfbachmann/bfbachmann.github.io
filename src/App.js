import React, { Component } from 'react';
import ThreeComponent from './three/ThreeComponent.js';
import IonIcon from 'react-ionicons';
import './App.css';


export default class App extends Component {
    componentDidMount() {
        ThreeComponent(this.threeRootElement);
    }

    render() {
        return (
            <div className='container-fluid' id='app'>
                <div className='row'>
                    <div className='col'>
                        <Links />
                        <h1>Bruno Bachmann</h1>
                        <h2>Software Engineer</h2>
                        <Projects />
                        <Experience />
                        <Education />
                    </div>
                    <div className='col' id='playground'>
                        <div id='three' ref={element => this.threeRootElement = element}></div>
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