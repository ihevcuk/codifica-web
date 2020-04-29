import React from 'react';
import pngguru from '../images/pngguru.png';

function AboutUs() {
    return <div className="row">
    <div className="col-sm-6">
      <h2>About Us</h2>
      <h4>We are a fresh software agency primarily focused on building enterprise grade software solutions.
          Early adopters of all things reactive. We are big advocates for building robust and high-throughput solutions 
          using reactive streams, reactive persistence drivers, and big data technologies.</h4>
      <p>We are focused on opensource technologies and have working experience with lenghty number of technologies that can provide 
        reliable, distributed and high availability applications. We can integrate in your existing team or we can work on project 
        from beggining to the end on our own - we already were in both situations and it worked well. In our team we have a mix of
        senior and junior developers and we have already beat a lot of challanges.
      </p>
    </div>
    <div className="col-sm-6 center d-none d-lg-block">
      <img src={pngguru}></img>
    </div>
  </div>
}

export default AboutUs