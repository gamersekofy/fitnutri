// import React from 'react';
// import './About.css';

// function About() {
//   return (
//       <div>
//           <header className="header">About Us</header>
//           <div className="container">
//               <section className="team-intro">
//                   <h2>Welcome to TEAM 03</h2>
//                   <p>The creators of FitNutri Hub. Meet the team below and click on who you want to know more about!</p>
//               </section>
//               <section className="team-members">
//                   <a href="michelle.html" className="team-member">
//                       <img src={michelleImg} alt="Michelle Nguyen" />
//                       <h3>Michelle Nguyen</h3>
//                       <p>Team Lead</p>
//                   </a>
//                   <a href="mitchell.html" className="team-member">
//                       <img src={mitchellImg} alt="Mitchell Caine" />
//                       <h3>Mitchell Caine</h3>
//                       <p>Frontend Lead</p>
//                   </a>
//                   <a href="ali.html" className="team-member">
//                       <img src={aliImg} alt="Ali Almusawi" />
//                       <h3>Ali Almusawi</h3>
//                       <p>GitHub Master</p>
//                   </a>
//                   <a href="nilofar.html" className="team-member">
//                       <img src={niloImg} alt="Nilofar Ali" />
//                       <h3>Nilofar Ali</h3>
//                       <p>Backend Lead</p>
//                   </a>
//                   <a href="eduardo.html" className="team-member">
//                       <img src={eduardoImg} alt="Eduardo Enrique Muñoz Alvarez" />
//                       <h3>Eduardo Enrique Muñoz Alvarez</h3>
//                       <p>Database Admin</p>
//                   </a>
//                   <a href="shreejana.html" className="team-member">
//                       <img src={shreeImg} alt="Shreejana Bartaula" />
//                       <h3>Shreejana Bartaula</h3>
//                       <p>Docs Editor</p>
//                   </a>
//               </section>
//           </div>
//           <footer className="footer">
//               &copy; 2024 FitNutri Hub. All rights reserved.
//           </footer>
//       </div>
//   );
// }

// export default About;

import React from 'react';
import './About.css';

<<<<<<< HEAD
// Import images (make sure these paths are correct)
// import michelleImg from './images/michelle.jpg';
// import mitchellImg from './images/mitchell.jpg';
// import aliImg from './images/ali.jpg';
// import niloImg from './images/nilo.jpg';
// import eduardoImg from './images/eduardo.jpg';
// import shreeImg from './images/shree.jpg';

import michelleImg from 'application/nutriapp/src/images/michelle.JPG';
import mitchellImg from 'application/nutriapp/src/images/mitchell.jpg';
import niloImg from 'application/nutriapp/src/images/Nilo.png';
import eduardoImg from 'application/nutriapp/src/images/Eduardo.png';
import shreeImg from 'application/nutriapp/src/images/shree.JPG';
=======
import michelleImg from './images/michelle.jpg';
import mitchellImg from './images/mitchell.jpg';
import aliImg from './images/ali.jpg';
import niloImg from './images/nilo.jpg';
import eduardoImg from './images/eduardo.jpg';
import shreeImg from './images/shree.jpg';
>>>>>>> 3f9b6d74a6e2843558fa617df6a158f14e744a26

function About() {
  return (
    <>
      <header className="header">About Us</header>
      <div className="container">
        <section className="team-intro">
          <h2>Welcome to TEAM 03</h2>
          <p>The creators of FitNutri Hub. Meet the team below and click on who you want to know more about!</p>
        </section>
        <section className="team-members">
          <a href="michelle.html" className="team-member">
            <img src={michelleImg} alt="Michelle Nguyen" />
            <h3>Michelle Nguyen</h3>
            <p>Team Lead</p>
          </a>
          <a href="mitchell.html" className="team-member">
            <img src={mitchellImg} alt="Mitchell Caine" />
            <h3>Mitchell Caine</h3>
            <p>Frontend Lead</p>
          </a>
          <a href="ali.html" className="team-member">
            <img src={aliImg} alt="Ali Almusawi" />
            <h3>Ali Almusawi</h3>
            <p>GitHub Master</p>
          </a>
          <a href="nilofar.html" className="team-member">
            <img src={niloImg} alt="Nilofar Ali" />
            <h3>Nilofar Ali</h3>
            <p>Backend Lead</p>
          </a>
          <a href="eduardo.html" className="team-member">
            <img src={eduardoImg} alt="Eduardo Enrique Muñoz Alvarez" />
            <h3>Eduardo Enrique Muñoz Alvarez</h3>
            <p>Database Admin</p>
          </a>
          <a href="shreejana.html" className="team-member">
            <img src={shreeImg} alt="Shreejana Bartaula" />
            <h3>Shreejana Bartaula</h3>
            <p>Docs Editor</p>
          </a>
        </section>
      </div>
      <footer className="footer">
        &copy; 2024 FitNutri Hub. All rights reserved.
      </footer>
    </>
  );
}

export default About;
