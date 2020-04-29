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
                  {/* <img src={''} class="card-img-top" alt="..."></img> */}
                  <div class="card-body">
                  <h5 class="card-title">Igor Hevčuk</h5>
                  <p class="card-text">
                    Codifica co-founder and senior software engineer. Fullstack developer but more focused on backend development, machine learning and JVM based languages. 
                    Igor is certified Java developer.
                  </p>
                  <a href="https://www.linkedin.com/in/igorhevcuk/" target="_blank" class="btn btn-primary"><i className="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="card" style={{width: "18rem"}}>
                  {/* <img src={''} class="card-img-top" alt="..."></img> */}
                  <div class="card-body">
                  <h5 class="card-title">Nikola Babić</h5>
                  <p class="card-text">
                    Codifica co-founder and senior software engineer. Fullstack developer, but leans more towards backend development. Reactive programming evangelist. 
                    Nikola is certified Java developer.
                  </p>
                  <a href="https://www.linkedin.com/in/nikola-babi%C4%87-306837ab/" target="_blank" class="btn btn-primary"><i className="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="card" style={{width: "18rem"}}>
                  {/* <img src={''} class="card-img-top" alt="..."></img> */}
                  <div class="card-body">
                  <h5 class="card-title">Fran Konecki</h5>
                  <p class="card-text">
                    Fran is fresh out of college, but still has few years of experience in backend software development. Learns things fast and shows interest in computer
                    science fields.
                  </p>
                  <a href="https://www.linkedin.com/in/fran-konecki-5445861a8/" target="_blank" class="btn btn-primary"><i className="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
            <div class="col-sm-3">
              <div class="card" style={{width: "18rem"}}>
                  {/* <img src={''} class="card-img-top" alt="..."></img> */}
                  <div class="card-body">
                  <h5 class="card-title">Mirza Mešić</h5>
                  <p class="card-text">Mirza is fresh out of college. Interested in few tech fields, like embedded software development and
                    frontend development. In Codifica he is focused on frontend development.</p>
                  <a href="https://www.linkedin.com/in/mirza-me%C5%A1i%C4%87/" target="_blank" class="btn btn-primary"><i className="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
          </div>
    </div>
}

export default Team