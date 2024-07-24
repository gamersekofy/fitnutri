// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Header.css';

// function Header() {
//   return (
//     <header className="header">
//       <div className="header-content">
//         <img src="/path-to-logo.png" alt="FitNutri" className="logo" />
//         <nav>
//           <Link to="/" className="nav-link">Home</Link>
//           <Link to="/about" className="nav-link">About</Link>
//           <Link to="/Contact" className="nav-link">Contact</Link>
//           <Link to="/signIn" className="nav-link">signIn</Link>
//           <Link to="/signUp" className="nav-link">signUp</Link>
//           <Link to="/NutriCommunity" className="nav-link">NutriCommunity</Link>
//           <Link to="/Progress" className="nav-link">Progress</Link>
          
        
//           {/*  <Link to="/HealthInfo" className="nav-link">HealthInfo</Link>
//           <Link to="/Progress" className="nav-link">Progress</Link>
//           <Link to="/PersonalNutritionPlan" className="nav-link">PersonalNutritionPlan</Link>
//           <Link to="/PersonalRecipes" className="nav-link">PersonalRecipes</Link>
//           <Link to="/AssesmentWorkout" className="nav-link">AssesmentWorkout</Link>
//           <Link to="/RecipeVideo" className="nav-link">RecipeVideo</Link>
//           <Link to="/Discussion" className="nav-link">Discussion</Link>
//           <Link to="/PersonalWorkoutPlan" className="nav-link">PersonalWorkoutPlan</Link>
//           <Link to="/PersonalWorkouts" className="nav-link">PersonalWorkouts</Link>
//           <Link to="/WorkoutVideo" className="nav-link">WorkoutVideo</Link>
//           <Link to="/FitnessAssesment" className="nav-link">FitnessAssesment</Link>
//   <Link to="/communityDiscussion" className="nav-link">communityDiscussion</Link>*/}

//         </nav>
//         <div className='search'>
//         <input placeholder="Search..."/>
//       <button>Search</button>
//         </div>
      
//       </div>
//       <div>
      
//     </div>
//     </header>
//   );
// }

// export default Header;


import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button, Container } from 'react-bootstrap';
import './Header.css';

function Header() {
  return (
    <Container fluid>
      <Navbar expand="lg" className="header">
        <Navbar.Brand href="/">
          <img src="/path-to-logo.png" alt="FitNutri" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/" className="nav-link">Home</Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-link">About</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-link">Contact</Nav.Link>
            <Nav.Link as={Link} to="/signIn" className="nav-link">Sign In</Nav.Link>
            <Nav.Link as={Link} to="/signUp" className="nav-link">Sign Up</Nav.Link>
            <Nav.Link as={Link} to="/NutriCommunity" className="nav-link">NutriCommunity</Nav.Link>
            <Nav.Link as={Link} to="/Progress" className="nav-link">Progress</Nav.Link>
          </Nav>
          <Form inline className="ml-auto search">
            <FormControl type="text" placeholder="Search..." className="mr-sm-2" />
            <Button variant="outline-success" className="search-button">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}

export default Header;