import React from 'react';

function Team() {
    return <div>
         <div class="text-center">
            <h2>Our Team</h2>
            <h4>Small but skillfull gang :)</h4>
          </div>
          <div class="row mt-5">
            <div class="col-sm-3">
              <div class="card" style={{width: "18rem"}}>
                  <img src={''} class="card-img-top" alt="..."></img>
                  <div class="card-body">
                  <h5 class="card-title">Igor Hevčuk</h5>
                  <p class="card-text">
                    Codifica co-founder and senior software engineer. Igor likes to check what is new in technology world and then adopt it
                    if they are suitable for day to day work. Igor is certified Java developer.
                  </p>
                  <a href="https://www.linkedin.com/in/igorhevcuk/" target="_blank" class="btn btn-primary">LinkedIn profile</a>
                </div>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="card" style={{width: "18rem"}}>
                  <img src={''} class="card-img-top" alt="..."></img>
                  <div class="card-body">
                  <h5 class="card-title">Nikola Babić</h5>
                  <p class="card-text">
                    Codifica co-founder and senior software engineer. Nikola likes to check what is new in technology world and then adopt it
                    if they are suitable for day to day work. Nikola is certified Java developer.
                  </p>
                  <a href="https://www.linkedin.com/in/nikola-babi%C4%87-306837ab/" target="_blank" class="btn btn-primary">LinkedIn profile</a>
                </div>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="card" style={{width: "18rem"}}>
                  <img src={''} class="card-img-top" alt="..."></img>
                  <div class="card-body">
                  <h5 class="card-title">Fran Konecki</h5>
                  <p class="card-text">Fran is our young collegue still focused on learning things with support of out senior developers.
                    He is interested in machine learning and backend software development.
                  </p>
                  <a href="https://www.linkedin.com/in/fran-konecki-5445861a8/" target="_blank" class="btn btn-primary">LinkedIn profile</a>
                </div>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="card" style={{width: "18rem"}}>
                  <img src={''} class="card-img-top" alt="..."></img>
                  <div class="card-body">
                  <h5 class="card-title">Mirza Mešić</h5>
                  <p class="card-text">Like Fran, Mirza is also still focused on learning things. He is mix of unmixable - 
                    programming software for embeddable devices and making frontend for out business clients.
                  </p>
                  <a href="https://www.linkedin.com/in/mirza-me%C5%A1i%C4%87/" target="_blank" class="btn btn-primary">LinkedIn profile</a>
                </div>
              </div>
            </div>
          </div>
    </div>
}

export default Team