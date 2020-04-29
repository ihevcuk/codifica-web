import React from 'react';
import '../Typing.css'
import logo from '../images/big-logo-1.png';
import Typing from '../Typing';

function Jumbotron() {
    return <div className="jumbotron text-center bg-white mg-top-5">
    <img className="img-fluid" src={logo}></img>
    <p><Typing speed="40" text="We specialize in custom software development." /><span class="blinking-cursor">|</span></p>
  </div>
}

export default Jumbotron