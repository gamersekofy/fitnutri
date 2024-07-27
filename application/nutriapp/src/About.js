// import React from 'react';
// import './About.css';

// function About() {
//   return (
//       <div>
//           <header className="About-header">About Us</header>
//           <div className="About-container">
//               <section className="About-team-intro">
//                   <h2>Welcome to TEAM 03</h2>
//                   <p>The creators of FitNutri Hub. Meet the team below and click on who you want to know more about!</p>
//               </section>
//               <section className="About-team-members">
//                   <a href="michelle.html" className="About-team-member">
//                       <img src={michelleImg} alt="Michelle Nguyen" />
//                       <h3>Michelle Nguyen</h3>
//                       <p>Team Lead</p>
//                   </a>
//                   <a href="mitchell.html" className="About-team-member">
//                       <img src={mitchellImg} alt="Mitchell Caine" />
//                       <h3>Mitchell Caine</h3>
//                       <p>Frontend Lead</p>

//                   <a href="nilofar.html" className="About-team-member">
//                       <img src={niloImg} alt="Nilofar Ali" />
//                       <h3>Nilofar Ali</h3>
//                       <p>Backend Lead</p>
//                   </a>
//                   <a href="eduardo.html" className="About-team-member">
//                       <img src={eduardoImg} alt="Eduardo Enrique Muñoz Alvarez" />
//                       <h3>Eduardo Enrique Muñoz Alvarez</h3>
//                       <p>Database Admin</p>
//                   </a>
//                   <a href="shreejana.html" className="About-team-member">
//                       <img src={shreeImg} alt="Shreejana Bartaula" />
//                       <h3>Shreejana Bartaula</h3>
//                       <p>Docs Editor</p>
//                   </a>
//                   <a href="ali.html" className="About-team-member">
//                       <img src={aliImg} alt="Ali Almusawi" />
//                       <h3>Ali Almusawi</h3>
//                       <p>GitHub Master</p>
//                   </a>
//                   <a href="john.html" className="About-team-member">
//                       <img src={johnImg} alt="John Collin" />
//                       <h3>John Collin</h3>
//                       <p>Backend</p>
//                   </a>
//                   <a href="uzair.html" className="About-team-member">
//                       <img src={uzairImg} alt="Uzair Hamed Mohammed" />
//                       <h3>Uzair Hamed Mohammed</h3>
//                       <p>Doc editor and Backend</p>
//                   </a>
//                   <a href="alih.html" className="About-team-member">
//                       <img src={alihImg} alt="Ali Hadwan" />
//                       <h3>Ali Hadwan</h3>
//                       <p>Frontend</p>
//                   </a>

//               </section>
//           </div>
//           <footer className="About-footer">
//               &copy; 2024 FitNutri Hub. All rights reserved.
//           </footer>
//       </div>
//   );
// }

// export default About;

import React from 'react';
import './About.css';

// Ensure the file names and extensions match exactly (case-sensitive)
import michelleImg from './images/michelle.JPG';
import mitchellImg from './images/mitchell.jpg';
import niloImg from './images/Nilo.png';
import eduardoImg from './images/Eduardo.png';
import shreeImg from './images/shree.JPG';



function About() {
  return (
    <>
      
      <div className="About-container">
      <header className="About-headers">About Us</header>
        <section className="team-intro">
          <h2>Welcome to TEAM 03</h2>
          <p>The creators of FitNutri Hub. Meet the team below and click on who you want to know more about!</p>
        </section>
        <section className="About-team-members">
          <a href="michelle.html" className="About-team-member">
            <img src={michelleImg} alt="Michelle Nguyen" />
            <h3>Michelle Nguyen</h3>
            <p>Team Lead</p>
          </a>
          <a href="mitchell.html" className="About-team-member">
            <img src={mitchellImg} alt="Mitchell Caine" />
            <h3>Mitchell Caine</h3>
            <p>Frontend Lead</p>
          </a>
          
          <a href="nilofar.html" className="About-team-member">
            <img src={niloImg} alt="Nilofar Ali" />
            <h3>Nilofar Ali</h3>
            <p>Backend Lead</p>
          </a>
          <a href="eduardo.html" className="About-team-member">
            <img src={eduardoImg} alt="Eduardo Enrique Muñoz Alvarez" />
            <h3>Eduardo Enrique Muñoz Alvarez</h3>
            <p>Database Admin</p>
          </a>
          <a href="shreejana.html" className="About-team-member">
            <img src={shreeImg} alt="Shreejana Bartaula" />
            <h3>Shreejana Bartaula</h3>
            <p>Docs Editor</p>
          </a>
           {/* <a href="ali.html" className="About-team-member">
            <img src={aliImg} alt="Ali Almusawi" />
            <h3>Ali Almusawi</h3>
            <p>GitHub Master</p>
          </a> 
           <a href="john.html" className="About-team-member">
            <img src={johnImg} alt="John Collin" />
            <h3>John Collin</h3>
            <p>Backend</p>
          </a> 
          <a href="uzair.html" className="About-team-member">
            <img src={uzairImg} alt="Uzair Hamed Mohammed" />
            <h3>Uzair Hamed Mohammed</h3>
            <p>Doc editor and Backend</p>
          </a>
          <a href="alih.html" className="About-team-member">
            <img src={aliImg} alt="Ali Haldwan" />
            <h3>Ali Haldwan</h3>
            <p>Frontend</p>
          </a> 
           */}
        </section>
        
      </div>
     
    </>
  );
}

export default About;