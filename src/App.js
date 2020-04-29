import React from 'react';
import Jumbotron from './sections/Jumbotron';
import AboutUs from './sections/AboutUs';
import Services from './sections/Services';
import Clients from './sections/Clients';
import Blog from './sections/Blog';
import Team from './sections/Team';
import Contact from './sections/Contact';
import Navbar from './sections/Navbar';
import './App.css'
import './sections/Navbar.css';

function App() {
  return (
    <div>
      <Navbar />

      <Jumbotron />

      <div id="about" className="container-fluid bg-grey slideanim">
        <AboutUs />
      </div>

      <div id="services" className="container-fluid text-center bg-white slideanim">
        <Services />
      </div>

      <div id="clients" className="container-fluid text-center bg-grey slideanim">
        <Clients />
      </div>

      <div id="blog" className="container-fluid bg-white text-center slideanim">
        <Blog />
      </div>

      <div id="team" class="container-fluid bg-grey slideanim">
        <Team />
      </div>

      <div id="contact" class="container-fluid bg-white slideanim">
        <Contact />
      </div>

      <footer class="container-fluid text-center">
        <a href="#about" title="To Top">
          <i class="fas fa-chevron-up"></i>
        </a>
        <p>© 2020 Codifica | All rights reserved | Developed by Codifica</p>
        <span>Codifica d.o.o. — Codifica LLC. MBS 05100437 Registrirano na Trgovačkom sudu u Zagrebu Temeljni kapital: 20.000,00 kn uplaćen u cijelosti. <br />Članovi društva: Nikola Babić, Igor Hevčuk</span>
      </footer>

    </div>
  );
}

export default App;

