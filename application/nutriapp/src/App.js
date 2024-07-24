import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
/*import Footer from './Footer';*/
import Main from './Main';
import SignIn from './SignIn';
import SignUp from './SignUp';
import About from './About';
import HealthInfo from './HealthInfo';
import Progress from './Progress';
import Contact from './Contact';
import Nutrition from './Nutrition';
import Fitness from './Fitness';
import PersonalNutritionPlan from './PersonalNutritionPlan';
import PersonalRecipes from './PersonalRecipes';
import RecipeVideo from './RecipeVideo';
import PersonalWorkoutPlan from './PersonalWorkoutPlan';
import PersonalWorkouts from './PersonalWorkouts';
import WorkoutVideo from './WorkoutVideo';
import NutriCommunity from './NutriCommunity';
import Discussion from './Discussion';
import FitnessAssesment from './FitnessAssesment';
import AssesmentWorkout from './AssesmentWorkout';
import Article from './Article';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/HealthInfo" element={<HealthInfo />} />
          <Route path="/Progress" element={<Progress />} />
          <Route path="/contact" element={<Contact />} />  
          <Route path="/nutrition" element={<Nutrition />} /> 
          <Route path="/fitness" element={<Fitness />} />
          <Route path="/PersonalNutritionPlan" element={<PersonalNutritionPlan />} />
          <Route path="/PersonalRecipes" element={<PersonalRecipes />} />
          <Route path="/RecipeVideo" element={<RecipeVideo />} />
          <Route path="/PersonalWorkoutPlan" element={<PersonalWorkoutPlan />} />
          <Route path="/PersonalWorkouts" element={<PersonalWorkouts />} />
          <Route path="/WorkoutVideo" element={<WorkoutVideo />} />
          <Route path="/NutriCommunity" element={<NutriCommunity />} />
          <Route path="/Discussion" element={<Discussion />} />
          <Route path="/Article" element={<Article />} />
          <Route path="/FitnessAssesment" element={<FitnessAssesment />} />
          <Route path="/AssesmentWorkout" element={<AssesmentWorkout />} />

        </Routes>
       {/*<Footer />*/}
      </div>
    </Router>
  );
}

export default App;
