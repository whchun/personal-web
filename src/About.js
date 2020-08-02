import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import profilePic from './assets/pic3.jpg';
import './About.css';

export default class About extends Component {
    render() {
        return(
            <div className="about-container">
                <div className="about-image">
                    <img src={profilePic} />
                </div>
                <div className="about-text">
                    <h1>Wendy H. Chun</h1>
                    <h3>Software Engineer</h3>
                    <br></br>
                    <div className="about-detail-text">
                         I am coming from various roles including full-stack, mobile, embedded, and research development.
                        <br></br>
                        I am skilled in Python, C/C++, Java, JavaScript, SQL, and more (TL;DR).
                        <br></br>
                        My academic research focused on Augmented Reality and Computer Vision technologies.
                        <br></br>
                        <br></br>
                        During my spare time, I enjoy playing with microcomputers and sensors.
                    </div>
                </div>
                <p></p>
                <div className="about-link">
                    <a href="http://www.linkedin.com/in/wendyhchun" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="http://www.github.com/whchun" target="_blank">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </div>
            </div>
        )
      }
}