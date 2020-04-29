import React from 'react';

function Contact() {
    return <div>
        <div class="text-center">
            <h2>Contact</h2>
            <h4>If you want to hire us, contact us on our mail!</h4>
          </div>
          <div className="row mt-5">
            <div className="col-sm-5">
              <p>Contact us and we'll get back to you within 24 hours.</p>
              <p><span><i className="fas fa-map-marker-alt"></i> Zagreb, Croatia</span></p>
              <p><span><i className="fas fa-phone"></i> +385 91 793 9153</span></p>
              <p><span><i className="fas fa-envelope"></i> info@codifica.io</span></p>
            </div>
            <div class="col-sm-7 pl-5 d-none d-lg-block">
              <div class="row">
              <img className="img-fluid" width="512" alt="Europe-Croatia" 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Europe-Croatia.svg/512px-Europe-Croatia.svg.png" />
              </div>
            </div>
          </div>
    </div>
}

export default Contact