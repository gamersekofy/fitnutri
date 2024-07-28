// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import { ChartContainer } from "./components/ui/chart"
// import { Card, CardContent } from "./components//ui/card"
// import { PolarAngleAxis, RadialBar, RadialBarChart } from "recharts"
// import './Progress.css';



// function useQuery() {
//     return new URLSearchParams(useLocation().search);
// }

// function Progress() {

//     const query = useQuery();
//     const [currentWeight, setCurrentWeight] = useState(Number(query.get('weight')));
//     const [weightGoal, setWeightGoal] = useState(Number(query.get('goalWeight')));
//     const [daysAvailable, setDaysAvailable] = useState(query.get('daysAvailable'));

//      // Calculate the percentage of the goal achieved
//      const weightPercentage = (currentWeight / weightGoal) * 100;

//      const hasMetWeightGoal = currentWeight === weightGoal;

//     const navigate = useNavigate();
//     const navigateToHealthInfo = () => {
//         navigate('/HealthInfo');
//       };


//     return (
//         <div>
//             <div className='FP-NP'> 
//                 <div className='FP'>
                
//                     <div className='FP-Activ-Header'>
//                         Fitness Progress
//                         Activities
//                     </div>
//                         <div className='FP-lable-input'>
//                         <div className='FP-values'>
//                             <label># of workout</label>
//                             <input type="text"/>
//                         </div>
//                         <div className='FP-values'>
//                             <label># of Minutes</label>
//                             <input type="text"/>
//                         </div>
//                         <div className='FP-values'> 
//                             <label># of Days</label>
//                             <input type="text"/>
//                         </div>
//                         <div className='FP-values'>
//                             <label>Weight Goal</label>
//                             <input type="text" value={weightGoal} onChange={(e) => setWeightGoal(Number(e.target.value))}/>
//                         </div>
//                         <div className='FP-values'>
//                             <label>Current Weight</label>
//                             <input type="text" value={currentWeight} onChange={(e) => setCurrentWeight(Number(e.target.value))}/>
//                         </div>
//                     </div>      
//                        <div className='Weight-Graph'>
//                                <div className='WG-lable'>Weight Graph</div>

//                                <Card className="max-w-xs">
//             <CardContent className="flex flex-col gap-4 p-4">
//                 <div className="grid items-center gap-2">
//                     <div className="grid flex-1 auto-rows-min gap-0.5">
//                         <div className="text-sm text-muted-foreground">current Weight/Weight Goal</div>
//                         <div className="flex items-baseline gap-1 text-xl font-bold tabular-nums leading-none">
//                         {currentWeight}/{weightGoal}
//                             <span className="text-sm font-normal text-muted-foreground"> lb</span>
//                         </div>
//                     </div>
//                 </div>
//                 <ChartContainer className="mx-auto aspect-square w-full max-w-[80%]">
//                 <RadialBarChart
//                                         width={200}
//                                         height={200}
//                                         cx="50%"
//                                         cy="50%"
//                                         innerRadius="70%"
//                                         outerRadius="90%"
//                                         barSize={20}
//                                         data={[{ name: 'Weight', value: currentWeight, fill: 'hsl(var(--chart-1))' }]}
//                                         startAngle={90}
//                                         endAngle={450}>
//                                         <PolarAngleAxis
//                                             type="number"
//                                             domain={[0, weightGoal]}  // This still depends on weightGoal to define the scale
//                                             dataKey="value"
//                                             tick={false}
//                                         />
//                                         <RadialBar dataKey="value" background cornerRadius={5} />
//                                     </RadialBarChart>
//                 </ChartContainer>
//             </CardContent>
//             {hasMetWeightGoal && (
//                                     <div className="alert-success">
//                                         Congratulations! You have reached your weight goal.
//                                     </div>
//                                 )}
//         </Card>
//                             </div>
//                     <div className='Achievements-lable'>Achievements</div>      
//                      <div className='Achievements'>
//                      <img src="/Logo.png" alt="FitNutri" className="logo" />
//                     <img src="/Logo.png" alt="FitNutri" className="logo" />
//                     <img src="/Logo.png" alt="FitNutri" className="logo" />
//                     <img src="/Logo.png" alt="FitNutri" className="logo" />
//                     <img src="/Logo.png" alt="FitNutri" className="logo" />
//                     <img src="/Logo.png" alt="FitNutri" className="logo" />
//                      </div>       
                    
//                 </div>
//                 <div className='NP'>
//                     <h2>Nutrition Progress</h2>
//                     <h5>Food Intake Tracker</h5>
//                     <div className='NP-lable-input'>
//                             <div className='NP-values1'>
//                                 <label>Breakfast (Cal)</label>
//                                 <input type="number" placeholder="Calories"/>
//                             </div>
//                             <div className='NP-values1'>
//                             <label>Lunch (Cal)</label>
//                             <input type="number" placeholder="Calories"/>
//                             </div>
//                             <div className='NP-values1'>
//                             <label>Dinner (Cal)</label>
//                             <input type="number" placeholder="Calories"/>
//                             </div>
//                     </div>
//                     <h5>Micro/Vitamin</h5>
//                     <div className='NP-lable-input'>
                        
//                     <div className='NP-values2'>
//                         <label>Carbs (g)</label>
//                         <input type="number" placeholder="Grams"/>
//                     </div>
//                     <div className='NP-values2'>
//                         <label>Fat (g)</label>
//                     <input type="number" placeholder="Grams"/>
//                     </div>
//                     <div className='NP-values2'>
//                         <label>Protein (g)</label>
//                     <input type="number" placeholder="Grams"/>
//                     </div>
//                     </div>
        
//                     <div className='Nutrition-Graph'>
//                         Nutrition Graph
//                         <Card className="max-w-xs">
//                                 <CardContent className="flex gap-4 p-4">
//                                     <div className="grid items-center gap-2">
//                                     <div className="grid flex-1 auto-rows-min gap-0.5">
//                                         <div className="text-sm text-muted-foreground">Move</div>
//                                         <div className="flex items-baseline gap-1 text-xl font-bold tabular-nums leading-none">
//                                         562/600
//                                         <span className="text-sm font-normal text-muted-foreground">
//                                             kcal
//                                         </span>
//                                         </div>
//                                     </div>
//                                     <div className="grid flex-1 auto-rows-min gap-0.5">
//                                         <div className="text-sm text-muted-foreground">Exercise</div>
//                                         <div className="flex items-baseline gap-1 text-xl font-bold tabular-nums leading-none">
//                                         73/120
//                                         <span className="text-sm font-normal text-muted-foreground">
//                                             min
//                                         </span>
//                                         </div>
//                                     </div>
//                                     <div className="grid flex-1 auto-rows-min gap-0.5">
//                                         <div className="text-sm text-muted-foreground">Stand</div>
//                                         <div className="flex items-baseline gap-1 text-xl font-bold tabular-nums leading-none">
//                                         8/12
//                                         <span className="text-sm font-normal text-muted-foreground">
//                                             hr
//                                         </span>
//                                         </div>
//                                     </div>
//                                     </div>
//                                     <ChartContainer
//                                     config={{
//                                         move: {
//                                         label: "Move",
//                                         color: "hsl(var(--chart-1))",
//                                         },
//                                         exercise: {
//                                         label: "Exercise",
//                                         color: "hsl(var(--chart-2))",
//                                         },
//                                         stand: {
//                                         label: "Stand",
//                                         color: "hsl(var(--chart-3))",
//                                         },
//                                     }}
//                                     className="mx-auto aspect-square w-full max-w-[80%]"
//                                     >
//                                     <RadialBarChart
//                                         margin={{
//                                         left: -10,
//                                         right: -10,
//                                         top: -10,
//                                         bottom: -10,
//                                         }}
//                                         data={[
//                                         {
//                                             activity: "stand",
//                                             value: (8 / 12) * 100,
//                                             fill: "var(--color-stand)",
//                                         },
//                                         {
//                                             activity: "exercise",
//                                             value: (46 / 60) * 100,
//                                             fill: "var(--color-exercise)",
//                                         },
//                                         {
//                                             activity: "move",
//                                             value: (245 / 360) * 100,
//                                             fill: "var(--color-move)",
//                                         },
//                                         ]}
//                                         innerRadius="20%"
//                                         barSize={24}
//                                         startAngle={90}
//                                         endAngle={450}
//                                     >
//                                         <PolarAngleAxis
//                                         type="number"
//                                         domain={[0, 100]}
//                                         dataKey="value"
//                                         tick={false}
//                                         />
//                                         <RadialBar dataKey="value" background cornerRadius={5} />
//                                     </RadialBarChart>
//                                     </ChartContainer>
//                                 </CardContent>
//                                 </Card>
//                     </div>
                    
                
//             </div>
//             </div>
//                 <div className='FN-button'>
//                 <button type="submit" onClick={navigateToHealthInfo}>Edit</button>
//                 <button type="submit">Print</button>
//                 <button type="submit">Share</button>
//                 </div>
//         </div>
//     );
// }

// export default Progress;

//testing purposes

import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { ChartContainer } from "./components/ui/chart";
import { Card, CardContent } from "./components/ui/card";
import { PolarAngleAxis, RadialBar, RadialBarChart } from "recharts";
import './Progress.css';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Progress() {
  const query = useQuery();
  const [currentWeight, setCurrentWeight] = useState(Number(query.get('weight')));
  const [weightGoal, setWeightGoal] = useState(Number(query.get('goalWeight')));
  const [daysAvailable, setDaysAvailable] = useState(query.get('daysAvailable'));

  const weightPercentage = (currentWeight / weightGoal) * 100;
  const hasMetWeightGoal = currentWeight === weightGoal;

  const navigate = useNavigate();
  const navigateToHealthInfo = () => {
    navigate('/HealthInfo');
  };

  return (
    <div>
      <div className='FP-NP'> 
        <div className='FP'>
          <div className='FP-Activ-Header'>Fitness Progress Activities</div>
          <div className='FP-lable-input'>
            <div className='FP-values'>
              <label># of workout</label>
              <input type="text" />
            </div>
            <div className='FP-values'>
              <label># of Minutes</label>
              <input type="text" />
            </div>
            <div className='FP-values'>
              <label># of Days</label>
              <input type="text" />
            </div>
            <div className='FP-values'>
              <label>Weight Goal</label>
              <input type="text" value={weightGoal} onChange={(e) => setWeightGoal(Number(e.target.value))} />
            </div>
            <div className='FP-values'>
              <label>Current Weight</label>
              <input type="text" value={currentWeight} onChange={(e) => setCurrentWeight(Number(e.target.value))} />
            </div>
          </div>
          <div className='Weight-Graph'>
            <div className='WG-lable'>Weight Graph</div>
            <Card className="max-w-xs">
              <CardContent className="flex flex-col gap-4 p-4">
                <div className="grid items-center gap-2">
                  <div className="grid flex-1 auto-rows-min gap-0.5">
                    <div className="text-sm text-muted-foreground">Current Weight/Weight Goal</div>
                    <div className="flex items-baseline gap-1 text-xl font-bold tabular-nums leading-none">
                      {currentWeight}/{weightGoal} <span className="text-sm font-normal text-muted-foreground">lb</span>
                    </div>
                  </div>
                </div>
                <ChartContainer className="mx-auto aspect-square w-full max-w-[80%]">
                  <RadialBarChart
                    width={200}
                    height={200}
                    cx="50%"
                    cy="50%"
                    innerRadius="70%"
                    outerRadius="90%"
                    barSize={20}
                    data={[{ name: 'Weight', value: currentWeight, fill: 'hsl(var(--chart-1))' }]}
                    startAngle={90}
                    endAngle={450}
                  >
                    <PolarAngleAxis
                      type="number"
                      domain={[0, weightGoal]}
                      dataKey="value"
                      tick={false}
                    />
                    <RadialBar dataKey="value" background cornerRadius={5} />
                  </RadialBarChart>
                </ChartContainer>
              </CardContent>
              {hasMetWeightGoal && (
                <div className="alert-success">
                  Congratulations! You have reached your weight goal.
                </div>
              )}
            </Card>
          </div>
          <div className='Achievements-lable'>Achievements</div>
          <div className='Achievements'>
            <img src="/Logo.png" alt="FitNutri" className="logo" />
            <img src="/Logo.png" alt="FitNutri" className="logo" />
            <img src="/Logo.png" alt="FitNutri" className="logo" />
            <img src="/Logo.png" alt="FitNutri" className="logo" />
            <img src="/Logo.png" alt="FitNutri" className="logo" />
            <img src="/Logo.png" alt="FitNutri" className="logo" />
          </div>       
        </div>
        <div className='NP'>
          <h2>Nutrition Progress</h2>
          <h5>Food Intake Tracker</h5>
          <div className='NP-lable-input'>
            <div className='NP-values1'>
              <label>Breakfast (Cal)</label>
              <input type="number" placeholder="Calories" />
            </div>
            <div className='NP-values1'>
              <label>Lunch (Cal)</label>
              <input type="number" placeholder="Calories" />
            </div>
            <div className='NP-values1'>
              <label>Dinner (Cal)</label>
              <input type="number" placeholder="Calories" />
            </div>
          </div>
          <h5>Micro/Vitamin</h5>
          <div className='NP-lable-input'>
            <div className='NP-values2'>
              <label>Carbs (g)</label>
              <input type="number" placeholder="Grams" />
            </div>
            <div className='NP-values2'>
              <label>Fat (g)</label>
              <input type="number" placeholder="Grams" />
            </div>
            <div className='NP-values2'>
              <label>Protein (g)</label>
              <input type="number" placeholder="Grams" />
            </div>
          </div>
          <div className='Nutrition-Graph'>
            Nutrition Graph
            <Card className="max-w-xs">
              <CardContent className="flex gap-4 p-4">
                <div className="grid items-center gap-2">
                  <div className="grid flex-1 auto-rows-min gap-0.5">
                    <div className="text-sm text-muted-foreground">Move</div>
                    <div className="flex items-baseline gap-1 text-xl font-bold tabular-nums leading-none">
                      562/600 <span className="text-sm font-normal text-muted-foreground">kcal</span>
                    </div>
                  </div>
                  <div className="grid flex-1 auto-rows-min gap-0.5">
                    <div className="text-sm text-muted-foreground">Exercise</div>
                    <div className="flex items-baseline gap-1 text-xl font-bold tabular-nums leading-none">
                      73/120 <span className="text-sm font-normal text-muted-foreground">min</span>
                    </div>
                  </div>
                  <div className="grid flex-1 auto-rows-min gap-0.5">
                    <div className="text-sm text-muted-foreground">Stand</div>
                    <div className="flex items-baseline gap-1 text-xl font-bold tabular-nums leading-none">
                      8/12 <span className="text-sm font-normal text-muted-foreground">hr</span>
                    </div>
                  </div>
                </div>
                <ChartContainer
                  config={{
                    move: {
                      label: "Move",
                      color: "hsl(var(--chart-1))",
                    },
                    exercise: {
                      label: "Exercise",
                      color: "hsl(var(--chart-2))",
                    },
                    stand: {
                      label: "Stand",
                      color: "hsl(var(--chart-3))",
                    },
                  }}
                  className="mx-auto aspect-square w-full max-w-[80%]"
                >
                  <RadialBarChart
                    margin={{
                      left: -10,
                      right: -10,
                      top: -10,
                      bottom: -10,
                    }}
                    data={[
                      {
                        activity: "stand",
                        value: (8 / 12) * 100,
                        fill: "var(--color-stand)",
                      },
                      {
                        activity: "exercise",
                        value: (46 / 60) * 100,
                        fill: "var(--color-exercise)",
                      },
                      {
                        activity: "move",
                        value: (245 / 360) * 100,
                        fill: "var(--color-move)",
                      },
                    ]}
                    innerRadius="20%"
                    barSize={24}
                    startAngle={90}
                    endAngle={450}
                  >
                    <PolarAngleAxis
                      type="number"
                      domain={[0, 100]}
                      dataKey="value"
                      tick={false}
                    />
                    <RadialBar dataKey="value" background cornerRadius={5} />
                  </RadialBarChart>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div className='FN-button'>
        <button type="submit" onClick={navigateToHealthInfo}>Edit</button>
        <button type="submit">Print</button>
        <button type="submit">Share</button>
      </div>
    </div>
  );
}

export default Progress;
