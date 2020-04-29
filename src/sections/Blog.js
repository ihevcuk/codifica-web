import React from 'react';
import './Blog.css'

function Blog() {
    return <div>
    <h2>Blog</h2>
          <h4>We are sharing our solutions we think could be useful for community</h4>
          <div class="row mb-2 text-left mt-5">
            <div class="col-md-6">
              <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div class="col p-4 d-flex flex-column position-static">
                  <strong class="d-inline-block mb-2 text-primary">Reactor Netty</strong>
                  <h3 class="mb-0">How to Implement a Custom Handshaking Protocol via TCP Using Reactor Netty</h3>
                  <div class="mb-1 text-muted">Feb 18 2020</div>
                  <p class="card-text mb-auto">In this blog post Nikola explained how to implement a Custom Handshaking Protocol via TCP Using Reactor Netty</p>
                  <a href="https://medium.com/@nikola.babic1/how-to-implement-a-custom-handshaking-protocol-via-tcp-using-reactor-netty-d8bcd2fe6ee7" target="_blank" class="stretched-link">Continue reading</a>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div class="col p-4 d-flex flex-column position-static">
                  <strong class="d-inline-block mb-2 text-success">Spring R2DBC</strong>
                  <h3 class="mb-0">Mapping to JSON Fields with Spring Data R2DBC and Reactive Postgres Driver</h3>
                  <div class="mb-1 text-muted">Oct 31 2019</div>
                  <p class="mb-auto">Read to find out how to do mapping to JSON Fields with Spring Data R2DBC and Reactive Postgres Driver.</p>
                  <a href="https://medium.com/@nikola.babic1/mapping-to-json-fields-with-spring-data-r2dbc-and-reactive-postgres-driver-1db765067dc5" target="_blank" class="stretched-link">Continue reading</a>
                </div>
              </div>
            </div>
          </div>
  </div>
}

export default Blog