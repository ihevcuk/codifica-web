import React from 'react';
import omegaLogo from '../images/omega-logo.svg';
import optimizerxLogo from '../images/optimizerx-logo.png';

function Clients() {
    return <div>
    <h2>Our Clients</h2>
          <h4>Companies we are working with</h4>
            <div className="row text-center mt-5">
                <div className="col-sm-6">
                  <div className="client-thumbnail">
                    <img height="auto" src={omegaLogo} alt="Omega Software"></img>
                    <p><strong>Omega Software</strong></p>
                    <p className="text-left">We built IOT platform. Platform is the central place for a new generation of business applications and solutions that enable business transformation. Using analytical tools it provides increased efficiency and raises business to a higher level of productivity and profitability. By integrating IoT solutions and improving information management it improves and promotes sustainability, opens up new business opportunities, and improves community life.</p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="client-thumbnail">
                    <img src={optimizerxLogo} alt="OptimizeRx"></img>
                    <p><strong>OptimizeRx</strong></p>
                    <p className="text-left">We helped in building health platform. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  </div>
                </div>
            </div>
  </div>
}

export default Clients