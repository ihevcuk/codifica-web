import React from 'react';
import omegaLogo from '../images/omega-logo.svg';
import optimizerxLogo from '../images/carespeak-logo.jpg';
import microblinkLogo from '../images/microblink-logo-vector.png';
import tmatixLogo from '../images/tmatix-logo.png';

function Clients() {
    return <div>
    <h2>Our Clients</h2>
          <h4>Companies we are working with</h4>
            <div className="row text-center mt-5">
                <div className="col-sm-6">
                  <div className="client-thumbnail">
                    <a target="_blank" href="https://www.omega-software.hr/"><img height="auto" src={omegaLogo} alt="Omega Software"></img></a>
                    <p><strong>Omega Software</strong></p>
                    <p className="text-left">We built an IoT platform. The platform is the central place for a new generation of business applications and solutions that enable business transformation. Using analytical tools it provides increased efficiency and raises business to a higher level of productivity and profitability. By integrating IoT solutions and improving information management it improves and promotes sustainability, opens up new business opportunities, and improves community life.</p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="client-thumbnail">
                    <a target="_blank" href="https://www.optimizerx.com/"><img src={optimizerxLogo} alt="OptimizeRx"></img></a>
                    <p><strong>CareSpeak Communications Inc. (acquired by OptimizeRx)</strong></p>
                    <p className="text-left">We helped build a mobile health platform, which empowers patients to better manage their health using their mobile phones through SMS technology. Platform has unparalleled digital capabilities and network capabilities to engage patients with the support they need when they start their treatment. It helps keep patients, and their caregivers, engaged to help accomplish the outcomes all are hoping for.</p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="client-thumbnail">
                    <a target="_blank" href="https://microblink.com/"><img src={microblinkLogo} alt="Microblink"></img></a>
                    <p><strong>Microblink</strong></p>
                    <p className="text-left">
                      Microblink is an R&D company developing proprietary computer vision technology optimized for realtime processing on mobile devices. <br/> The Codifica team helped with backing the software systems that collect and process data later used for training machine learning algorithms.
                    </p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="client-thumbnail">
                  <a target="_blank" href="https://www.t-matix.com/"><img style={{width: "164px", heigth: "85px"}} src={tmatixLogo} alt="t-matix"></img></a>
                    <p style={{marginTop: "32px"}}><strong>t-matix</strong></p>
                    <p className="text-left">
                      t-matix offers a powerful, one-stop-shop IoT platform that enables digital transformation and allows you to master the initial steps towards the Industrial Internet of Things (IIoT). <br/><br/> Codifica's previous experience in IoT field proved to be an asset to t-matix team.
                    </p>
                  </div>
                </div>
            </div>
  </div>
}

export default Clients