import React from 'react';
import pngguru from '../images/pngguru.png';

function AboutUs() {
    return <div className="row">
    <div className="col-sm-6">
      <h2>About Us</h2>
      <h4>We are a fresh software agency primarily focused on building enterprise grade software solutions.
          Early adopters of all things reactive. We are big advocates for building robust and high-throughput solutions 
          using reactive streams, reactive persistence drivers, and big data technologies.</h4>
      <p>We are mostly focused on open source technologies and have experience with lengthy number of diverse technologies that provide reliable, distributed, and high-availability applications. We can integrate into your existing team or manage the whole project from start to finish - we have successful track record in both scenarios. Our team consists of high performing and experienced professionals with various seniority levels.
      </p>
    </div>
    <div className="col-sm-6 center d-none d-lg-block">
      <img src={pngguru}></img>
    </div>
  </div>
}

export default AboutUs