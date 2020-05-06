import React from 'react';
import omegaLogo from '../images/omega-logo.svg';
import optimizerxLogo from '../images/carespeak-logo.jpg';

function Clients() {
    return <div>
    <h2>Our Clients</h2>
          <h4>Companies we are working with</h4>
            <div className="row text-center mt-5">
                <div className="col-sm-6">
                  <div className="client-thumbnail">
                    <img height="auto" src={omegaLogo} alt="Omega Software"></img>
                    <p><strong>Omega Software</strong></p>
                    <p className="text-left">We built an IoT platform. The platform is the central place for a new generation of business applications and solutions that enable business transformation. Using analytical tools it provides increased efficiency and raises business to a higher level of productivity and profitability. By integrating IoT solutions and improving information management it improves and promotes sustainability, opens up new business opportunities, and improves community life.</p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="client-thumbnail">
                    <img src={optimizerxLogo} alt="OptimizeRx"></img>
                    <p><strong>CareSpeak Communications Inc. (acquired by OptimizeRx)</strong></p>
                    <p className="text-left">We helped build a mobile health platform, which empowers patients to better manage their health using their mobile phones through SMS technology. Platform has unparalleled digital capabilities and network capabilities to engage patients with the support they need when they start their treatment. It helps keep patients, and their caregivers, engaged to help accomplish the outcomes all are hoping for.</p>
                  </div>
                </div>
            </div>
  </div>
}

export default Clients