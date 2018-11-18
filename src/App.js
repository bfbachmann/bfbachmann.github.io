import React, { Component } from 'react';
import PlanetScene from './three/PlanetScene';
import IonIcon from 'react-ionicons';
import './App.css';
import cumulus from './images/cumulus.png';
import rocketSlack from './images/rocket-slack.png';
import silverScreen from './images/silver-screen.png';

export default class App extends Component {

    componentDidMount() {
        // Set up scene
        PlanetScene(this.threeRootElement);
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
                <div className='container' id='content'>
                    <Projects />
                    <Experience />
                </div>
            </div>
        );
    }
}


class Links extends Component {
    render() {
        return (
            <div id='links'>
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
                <h3>Recent Projects</h3>
                <div id='cumulus' className='project'>
                    <h4>Cumulus</h4>
                    <div className='project-img-container'>
                        <img src={cumulus} className='img-fluid project-img' />
                    </div>
                    <p className='project-description'>
                        Cumulus is a cryptocurrency written in Go that allows users
                        to send and receive tokens on a P2P network name mine on the
                        network to create tokens for themselves. Features include a
                        fully fledged peer-to-peer communication protocol, blockchain
                        storage and validation, wallet creation and encrypted storage,
                        transactions, and a clean command-line interface to manage
                        it all.
                    </p>
                </div>
                <div id='rocket' className='project'>
                    <h4>Rocket</h4>
                    <div className='project-img-container'>
                        <img src={rocketSlack} className='img-fluid project-img' />
                    </div>
                    <p className='project-description'>
                        Rocket is a Slack bot and web server written in Go that members
                        of UBC Launch Pad use as an administrative tool. Rocket links
                        Slack user profiles for Launch Pad members to their GitHub
                        accounts and exposes a command interface through Slack messages
                        that allows users to manage their profile and their teams. Rocket
                        also provides team and member information to our website and
                        administrates our GitHub organization so they are automatically
                        updated when teams, administrators, or member profiles change.
                    </p>
                </div>
                <div id='silver-screen' className='project'>
                    <h4>Silver Screen</h4>
                    <div className='project-img-container'>
                        <img src={silverScreen} className='img-fluid project-img' />
                    </div>
                    <p className='project-description'>
                        Silver Screen is a web application that allows its users to
                        assess sentiment expressed within relevant movie-related tweets.
                        It gathers information from the Internet Movie Database (IMDb),
                        Rotten Tomatoes, and Twitter, and uses it to compare the results
                        of sentiment analysis and human generated movie reviews.
                    </p>
                </div>
            </div>
        );
    }
}


class Experience extends Component {
    render() {
        return (
            <div id='experience'>
                <h3>Work Experience</h3>
                <h5>
                    <span>Co-president &amp; Tech Lead </span>
                    <span className='org'>| UBC Launch Pad</span>
                </h5>
                <p>
                    UBC Launch Pad is a student-run software engineering team devoted to building software projects in a collaborative and professional environment. As co-president I oversee over 60 students across 6 separate teams as they develop open-source software. A significant portion of my role involves mentoring developers and technical leads, ensuring that our members are happy and are learning valuable skills, and that they have the resources they need to realize their ideas.
                </p>
                <h5>
                    <span>Intern, Software Engineer </span>
                    <span className='org'>| Demonware</span>
                </h5>
                <p>
                    Leveraging the power of Kubernetes and Python, I developed a tool for load testing web services for Call of Duty Black Ops 4. The tool gave Demonware and Blizzard developers the ability to write simple yet powerful Python models of probabilistic player behaviour that could be manipulated across Kubernetes pods on the fly. Developers used this tool to run millions of simultaneous user simulations almost daily, with login spikes of up to 2000 users per second.
                </p>
                <h5>
                    <span>Intern, Agile Developer </span>
                    <span className='org'>| SAP</span>
                </h5>
                <p>
                    I worked in the data acquisition area of SAP Analytics Cloud, handling connections with a wide range of data- storage systems from SQL databases to Google Big Query and Salesforce. My work was done on the front end, as well as our core backend and micro-services to move data through our systems in as safe and efficient a manner as possible.
                </p>
                <h5>
                    <span>Intern, Web Developer </span>
                    <span className='org'>| UBC Faculty of Education</span>
                </h5>
                <p>
                    I helped develop an online resource for UBC teacher candidates, in collaboration with another co-op student over the course of 4 months. One of the feature I was responsible for developing was the Learning Resources page with extensive search, sort and filter functionality that allowed users to find information efficiently.
                </p>
            </div>
        );
    }
}
