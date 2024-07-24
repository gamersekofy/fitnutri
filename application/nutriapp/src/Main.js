// import React from 'react';
// import ReactPlayer from 'react-player';
// import { useNavigate } from 'react-router-dom';
// import './main.css';

// function Main() {
//   const navigate = useNavigate();

//   const handleStartClick = () => {
//     navigate('/HealthInfo');
//   };
//   return (
//     <div className="main-container">
//       <div className="section-container">
//         <div className="journey-container">
//           <h2>Start Your Journey Today</h2>
//           <div className="journey-details">
      
//             <div className="detail-item">
//               <img src="path_to_nutrition_image.jpg" alt="Nutrition/Fitness" className="detail-img" />
//               <button className="detail-button" onClick={handleStartClick}>Start</button>
//             </div>
//           </div>
//         </div>
        
//         <div className="progress-section">
//           <h2>Fitness Progress</h2>
//           <div>
//             <img src="charts.png" alt="Progress Chart" className="progress-img" />
//           </div>
//           <h2>Nutrition Progress</h2>
//           <div>
//             <img src="charts.png" alt="Progress Chart" className="progress-img" />
//           </div>
//         </div>
//         <div className="video-section">
//         <h2>Videos</h2>
//         <div className="video-container">
//           <div className="video-item">
//             <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' playing width='100%' height='100%' />
//           </div>
//           <div className="video-item">
//             <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' playing width='100%' height='100%' />
//           </div>
//           <div className="video-item">
//             <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' playing width='100%' height='100%' />
//           </div>
//         </div>
//       </div>
//       </div>

      
//     </div>
//   );
// }

// export default Main;


import React from 'react';
import ReactPlayer from 'react-player';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Row, Col, Image } from 'react-bootstrap';
import './main.css';

function Main() {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate('/HealthInfo');
  };

  return (
    <Container className="main-container">
      <Row className="section-container">
        <Col className="journey-container">
          <h2>Start Your Journey Today</h2>
          <Row className="journey-details">
            <Col className="detail-item" xs={12} md={6}>
              <Image src="path_to_nutrition_image.jpg" alt="Nutrition/Fitness" className="detail-img" fluid />
              <Button className="detail-button" onClick={handleStartClick}>Start</Button>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="progress-section">
        <Col xs={12}>
          <h2>Fitness Progress</h2>
          <Image src="charts.png" alt="Progress Chart" className="progress-img" fluid />
        </Col>
        <Col xs={12}>
          <h2>Nutrition Progress</h2>
          <Image src="charts.png" alt="Progress Chart" className="progress-img" fluid />
        </Col>
      </Row>

      <Row className="video-section">
        <Col xs={12}>
          <h2>Videos</h2>
        </Col>
        <Col xs={12} md={4} className="video-item">
          <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' playing width='100%' height='100%' />
        </Col>
        <Col xs={12} md={4} className="video-item">
          <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' playing width='100%' height='100%' />
        </Col>
        <Col xs={12} md={4} className="video-item">
          <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' playing width='100%' height='100%' />
        </Col>
      </Row>
    </Container>
  );
}

export default Main;