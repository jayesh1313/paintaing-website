import React from 'react';
import '../App.css';
//import {Button} from './Button';
import './HeroSection.css';
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom';


function HeroSection() {
    return (
        <div className='hero-container'>
            
            <h1>AJM Watercolors</h1>
            <p>Original watercolor paintings crafted by the Jersey Shore.</p>
            <div className="hero-btns">
            <Link to="/paintings"><Button variant="light" size="lg" >Shop Now</Button></Link>
            </div>
        </div>
    );
}

export default HeroSection;
