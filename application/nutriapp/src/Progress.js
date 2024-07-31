import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { ChartContainer } from "./components/ui/chart"
import { Card, CardContent } from "./components//ui/card"
import { PolarAngleAxis, RadialBar, RadialBarChart } from "recharts"
import './Progress.css';



function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function clamp(value, max) {
    return value > max ? max : value;
}


function Progress() {
    const handlePrint = () => {
        window.print();
      };

      const [showOptions, setShowOptions] = useState(false);
    const url = encodeURIComponent(window.location.href);
    const handleShare = (platformUrl) => {
        window.open(platformUrl, '_blank');
        setShowOptions(false); 
      };


    const query = useQuery();
    const [currentWeight, setCurrentWeight] = useState(Number(query.get('weight')));
    const [weightGoal, setWeightGoal] = useState(Number(query.get('goalWeight')));
    const [daysAvailable, setDaysAvailable] = useState(query.get('daysAvailable'));

    const [nutritionData, setNutritionData] = useState({
        breakfastCal: 2000,
        lunchCal: 0,
        dinnerCal: 0,
        snackCal:0,
        carbs: 3,
        fat: 4,
        protein: 0,
        vitamins: 12,
        minerals: 0
    });
     
     const weightPercentage = (currentWeight / weightGoal) * 100;

     const hasMetWeightGoal = currentWeight === weightGoal && currentWeight > 0;

     const handleNutritionChange = (e) => {
        const { name, value } = e.target;
        setNutritionData(prevData => ({
            ...prevData,
            [name]: Number(value)
        }));
    };

    const totalCalories = clamp(nutritionData.breakfastCal + nutritionData.lunchCal + nutritionData.dinnerCal + nutritionData.snackCal, 2000);
    const totalMicros = clamp(nutritionData.carbs + nutritionData.fat + nutritionData.protein, 120);
    const totalMacro = clamp(nutritionData.vitamins + nutritionData.minerals, 12);

    const normalizedMicros = (totalMicros / 120) * 100;  
    const normalizedMacros = (totalMacro / 12) * 100;    
    const normalizedCalories = (totalCalories / 2000) * 100;

    const hasMetCalorieGoal = totalCalories === 2000;
    const hasMetMicrosGoal = totalMicros === 120;
    const hasMetMacrosGoal = totalMacro === 12;


    const navigate = useNavigate();
    const navigateToHealthInfo = () => {
        navigate('/HealthInfo');
      };


    return (
        <div>
            <div className='FP-NP'> 
                <div className='FP'>
                
                    <div className='FP-Activ-Header'>
                        <label>Fitness Progress</label>
                        <label>Activities</label>
                    </div>
                        <div className='FP-lable-input'>
                        <div className='FP-values'>
                            <label># of workout</label>
                            <input type="text"/>
                        </div>
                        <div className='FP-values'>
                            <label># of Minutes</label>
                            <input type="text"/>
                        </div>
                        <div className='FP-values'> 
                            <label># of Days</label>
                            <input type="text"/>
                        </div>
                        <div className='FP-values'>
                            <label>Weight Goal</label>
                            <input type="text" value={weightGoal} onChange={(e) => setWeightGoal(Number(e.target.value))}/>
                        </div>
                        <div className='FP-values'>
                            <label>Current Weight</label>
                            <input type="text" value={currentWeight} onChange={(e) => setCurrentWeight(Number(e.target.value))}/>
                        </div>
                    </div>      
                       <div className='Weight-Graph'>
                               <div className='WG-lable'>Weight Graph</div>

        <Card className="max-w-xs">
            <CardContent className="flex flex-col gap-4 p-4">
                    <div className="grid items-center gap-2">
                        <div className="grid flex-1 auto-rows-min gap-0.5">
                            <div className="text-sm text-muted-foreground">Weight Goal/current Weight</div>
                            <div className="flex items-baseline gap-1 text-xl font-bold tabular-nums leading-none">
                                    {weightGoal}/{currentWeight}
                                <span className="text-sm font-normal text-muted-foreground"> lb</span>
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
                                        data={[{ name: 'Weight', value: weightGoal, fill: 'hsl(var(--chart-1))' }]}
                                        startAngle={90}
                                        endAngle={450}>
                                        <PolarAngleAxis
                                            type="number"
                                            domain={[0, currentWeight]} 
                                            dataKey="value"
                                            tick={false}/>
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
                    <div className='FP-Activ-Header'>
                        <label>Nutrition Progress</label>
                        <label>Food Intake Tracker</label>
                    </div>
                    <div className='NP-lable-input'>
                            <div className='NP-values1'>
                                <label>Breakfast (Cal)</label>
                                <input type="text" placeholder="Calories" value={nutritionData.breakfastCal} onChange={handleNutritionChange}/>
                            </div>
                            <div className='NP-values1'>
                            <label>Lunch (Cal)</label>
                            <input type="text" placeholder="Calories" value={nutritionData.lunchCal} onChange={handleNutritionChange}/>
                            </div>
                            <div className='NP-values1'>
                            <label>Dinner (Cal)</label>
                            <input type="text" placeholder="Calories" value={nutritionData.dinnerCal} onChange={handleNutritionChange}/>
                            </div>
                            <div className='NP-values1'>
                            <label>Snack(Cal)</label>
                            <input type="text" placeholder="Calories" value={nutritionData.snackCal} onChange={handleNutritionChange}/>
                            </div>
                    </div>
                    <h5>Micro/Macr</h5>
                    <div className='NP-lable-input'>
                        
                    <div className='NP-values2'>
                        <label>Carbs (g)</label>
                        <input type="text" placeholder="Grams" value={nutritionData.carbs} onChange={handleNutritionChange}/>
                    </div>
                    <div className='NP-values2'>
                        <label>Fat (g)</label>
                    <input type="text" placeholder="Grams" value={nutritionData.fat} onChange={handleNutritionChange}/>
                    </div>
                    <div className='NP-values2'>
                        <label>Protein (g)</label>
                    <input type="text" placeholder="Grams" value={nutritionData.protein} onChange={handleNutritionChange}/>
                    </div>
                    <div className='NP-values2'>
                        <label>Vitamins (g)</label>
                    <input type="text" placeholder="Grams" value={nutritionData.vitamins} onChange={handleNutritionChange}/>
                    </div>
                    <div className='NP-values2'>
                        <label>Minerals (g)</label>
                    <input type="text" placeholder="Grams" value={nutritionData.minerals} onChange={handleNutritionChange}/>
                    </div>
                    </div>
        
                    <div className='Nutrition-Graph'>
    Nutrition Graph
    <Card className="max-w-xs">
        <CardContent className="flex gap-4 p-4">
            <div className="grid items-center gap-2">
                <div className="grid flex-1 auto-rows-min gap-0.5">
                    <div className="text-sm text-muted-foreground">Food Intake</div>
                    <div className="flex items-baseline gap-1 text-xl font-bold tabular-nums leading-none">
                        {totalCalories}/2000 kcal
                    </div>
                </div>
                <div className="grid flex-1 auto-rows-min gap-0.5">
                    <div className="text-sm text-muted-foreground">Micro</div>
                    <div className="flex items-baseline gap-1 text-xl font-bold tabular-nums leading-none">
                        {totalMicros}/120 g
                    </div>
                </div>
                <div className="grid flex-1 auto-rows-min gap-0.5">
                    <div className="text-sm text-muted-foreground">Macro</div>
                    <div className="flex items-baseline gap-1 text-xl font-bold tabular-nums leading-none">
                        {totalMacro}/12 g
                    </div>
                </div>
            </div>
            <ChartContainer
                                    config={{
                                        move: {
                                        label: "foodIntake",
                                        color: "hsl(var(--chart-1))",
                                        },
                                        exercise: {
                                        label: "Micros",
                                        color: "hsl(var(--chart-2))",
                                        },
                                        stand: {
                                        label: "Macro",
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
                                            { activity: "stand", value: normalizedMacros, fill: "#FF6347"},
                                            { activity: "exercise", value: normalizedMicros, fill: "#4682B4" },
                                            { activity: "food intake", value: normalizedCalories, fill: "#32CD32" },
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
        {hasMetCalorieGoal && <div className="alert-success">Congratulations on reaching your calorie goal!</div>}
                    {hasMetMicrosGoal && <div className="alert-success">Great job on hitting your micros target!</div>}
                    {hasMetMacrosGoal && <div className="alert-success">You've achieved your macros goal!</div>}
    </Card>
</div>

                    
                
            </div>
            
            </div>
            <div className='FN-button'>
  <button onClick={navigateToHealthInfo}>Edit</button>
  <button onClick={handlePrint}>Print</button>
  <button onClick={() => setShowOptions(!showOptions)}>Share</button>
  {showOptions && (
    <div className='share-options'>
      <button className='share' onClick={() => handleShare(`https://www.facebook.com/sharer/sharer.php?u=${url}`)}>
        Facebook
      </button>
      <button className='share' onClick={() => handleShare(`https://twitter.com/intent/tweet?url=${url}&text=Check this out!`)}>
        Twitter
      </button>
      <button className='share' onClick={() => handleShare(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`)}>
        LinkedIn
      </button>
    </div>
  )}
</div>
        </div>
    );
}

export default Progress;