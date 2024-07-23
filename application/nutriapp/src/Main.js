import React from 'react';
import ReactPlayer from 'react-player';
import './Main.css';

function Main() {
  return (
    <div style={{ padding: '20px', alignItems:'center', border:'1px solid' }}>
        <div style={{ marginBottom: '20px', display: 'flex', flexDirection:'row', alignItems:'center' }}>
      {/* Start Your Journey Today */}
        <div style={{ marginBottom: '20px', display: 'flex', flexDirection:'column', flex:'1', border:'1px solid', textAlign:'center', margin:'5px' }}>
        <h2>Start Your Journey Today</h2>
            <div style={{ display: 'flex', flexDirection:'row' }}>
          <div style={{ width: '15%', padding: '10px', textAlign: 'center', marginLeft:'200px' }}>
          <img src="path_to_fitness_image.jpg" alt="Fitness" style={{ width: '100%', marginBottom: '10px' }} />
            <button style={{ width: '100%', padding: '10px' }}>View Fitness Details</button>
          </div>
          <div style={{ width: '15%', padding: '10px', textAlign: 'center' }}>
            <img src="path_to_nutrition_image.jpg" alt="Nutrition" style={{ width: '100%', marginBottom: '10px' }} />
            <button style={{ width: '100%', padding: '10px' }}>View Nutrition Details</button>
          </div>
          </div>
        </div>
      
      {/* Progress */}
      <section style={{ marginBottom: '20px', display:'flex', flexDirection:'column', flex:'1', border:'1px solid', textAlign:'center', margin:'5px' }}>
        <h2>Fitness Progress</h2>
        <div style={{ }}>
          <img src="path_to_progress_chart.jpg" alt="Progress Chart" style={{ width: '100%' }} />
        </div>
        <h2>Nutrition Progress</h2>
        <div style={{}}>
          <img src="path_to_progress_chart.jpg" alt="Progress Chart" style={{ width: '100%' }} />
        </div>
      </section>
      </div>

      {/* Videos */}
      <section style={{textAlign:'center', border:'1px solid', margin:'5px'}}>
        <h2>Videos</h2>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ width: '30%', padding: '10px' }}>
            <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' playing width='100%' height='100%' />
          </div>
          <div style={{ width: '30%', padding: '10px' }}>
            <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' playing width='100%' height='100%' />
          </div>
          <div style={{ width: '30%', padding: '10px' }}>
            <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' playing width='100%' height='100%' />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Main;
