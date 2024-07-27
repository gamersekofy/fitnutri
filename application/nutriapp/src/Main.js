import React from 'react';
import ReactPlayer from 'react-player';
import { useNavigate } from 'react-router-dom';
import {ChartTooltipContent, ChartTooltip } from "./components/ui/chart";
import { Bar, BarChart, Label, Rectangle, ReferenceLine, XAxis } from "recharts";
import {Card,CardContent,CardDescription,CardFooter,CardHeader,CardTitle,} from "./components//ui/card";
import {ChartContainer} from "./components//ui/chart";
import './main.css';


function Main() {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate('/HealthInfo');
  };
  return (
    <div className="main-container">
      <h2>Start Your Journey Today</h2>
       <div className="journey-FP-NP-section">
       <div className="journey-container">
          <div className="journey-details">
            <div className='detail-item'><img src="FitNutri.png" alt="Nutrition/Fitness" className="detail-img" />
              <h2>Fitness/Nutrition</h2>
             <button className="detail-button" onClick={handleStartClick}>Start</button>
             </div>
              
            
          </div>
        </div>
        <div className='FP-NP-section'>
        <div className="FP-section">
          <div className='FP-word'><h2>Fitness Progress</h2></div>
          <div className='FP-card'>
          <Card className="lg:max-w-md">
              <CardHeader className="space-y-0 pb-2">
                <CardDescription>Today</CardDescription>
                <CardTitle className="text-4xl tabular-nums">
                  12,584{" "}
                  <span className="font-sans text-sm font-normal tracking-normal text-muted-foreground">
                    steps
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    steps: {
                      label: "Steps",
                      color: "hsl(var(--chart-1))",
                    },
                  }}
                >
                  <BarChart
                    accessibilityLayer
                    margin={{
                      left: -4,
                      right: -4,
                    }}
                    data={[
                      {
                        date: "2024-01-01",
                        steps: 2000,
                      },
                      {
                        date: "2024-01-02",
                        steps: 2100,
                      },
                      {
                        date: "2024-01-03",
                        steps: 2200,
                      },
                      {
                        date: "2024-01-04",
                        steps: 1300,
                      },
                      {
                        date: "2024-01-05",
                        steps: 1400,
                      },
                      {
                        date: "2024-01-06",
                        steps: 2500,
                      },
                      {
                        date: "2024-01-07",
                        steps: 1600,
                      },
                    ]}
                  >
                    <Bar
                      dataKey="steps"
                      fill="var(--color-steps)"
                      radius={5}
                      fillOpacity={0.6}
                      activeBar={<Rectangle fillOpacity={0.8} />}
                    />
                    <XAxis
                      dataKey="date"
                      tickLine={false}
                      axisLine={false}
                      tickMargin={4}
                      tickFormatter={(value) => {
                        return new Date(value).toLocaleDateString("en-US", {
                          weekday: "short",
                        })
                      }}
                    />
                    <ChartTooltip
                      defaultIndex={2}
                      content={
                        <ChartTooltipContent
                          hideIndicator
                          labelFormatter={(value) => {
                            return new Date(value).toLocaleDateString("en-US", {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            })
                          }}
                        />
                      }
                      cursor={false}
                    />
                    <ReferenceLine
                      y={1200}
                      stroke="hsl(var(--muted-foreground))"
                      strokeDasharray="3 3"
                      strokeWidth={1}
                    >
                      <Label
                        position="insideBottomLeft"
                        value="Average Steps"
                        offset={10}
                        fill="hsl(var(--foreground))"
                      />
                      <Label
                        position="insideTopLeft"
                        value="12,343"
                        className="text-lg"
                        fill="hsl(var(--foreground))"
                        offset={10}
                        startOffset={100}
                      />
                    </ReferenceLine>
                  </BarChart>
                </ChartContainer>
              </CardContent>
              <CardFooter className="flex-col items-start gap-1">
                <CardDescription>
                  Over the past 7 days, you have walked{" "}
                  <span className="font-medium text-foreground">53,305</span> steps.
                </CardDescription>
                <CardDescription>
                  You need <span className="font-medium text-foreground">12,584</span>{" "}
                  more steps to reach your goal.
                </CardDescription>
              </CardFooter>
            </Card>
          </div>
          
        </div>
      <div className='NP-section'>

          <div className='NP-word'><h2>Nutrition Progress</h2></div>
          <div className='NF-Card'>
          <Card className="lg:max-w-md">
              <CardHeader className="space-y-0 pb-2">
                <CardDescription>Today</CardDescription>
                <CardTitle className="text-4xl tabular-nums">
                  12,584{" "}
                  <span className="font-sans text-sm font-normal tracking-normal text-muted-foreground">
                    steps
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    steps: {
                      label: "Steps",
                      color: "hsl(var(--chart-1))",
                    },
                  }}
                >
                  <BarChart
                    accessibilityLayer
                    margin={{
                      left: -4,
                      right: -4,
                    }}
                    data={[
                      {
                        date: "2024-01-01",
                        steps: 2000,
                      },
                      {
                        date: "2024-01-02",
                        steps: 2100,
                      },
                      {
                        date: "2024-01-03",
                        steps: 2200,
                      },
                      {
                        date: "2024-01-04",
                        steps: 1300,
                      },
                      {
                        date: "2024-01-05",
                        steps: 1400,
                      },
                      {
                        date: "2024-01-06",
                        steps: 2500,
                      },
                      {
                        date: "2024-01-07",
                        steps: 1600,
                      },
                    ]}
                  >
                    <Bar
                      dataKey="steps"
                      fill="var(--color-steps)"
                      radius={5}
                      fillOpacity={0.6}
                      activeBar={<Rectangle fillOpacity={0.8} />}
                    />
                    <XAxis
                      dataKey="date"
                      tickLine={false}
                      axisLine={false}
                      tickMargin={4}
                      tickFormatter={(value) => {
                        return new Date(value).toLocaleDateString("en-US", {
                          weekday: "short",
                        })
                      }}
                    />
                    <ChartTooltip
                      defaultIndex={2}
                      content={
                        <ChartTooltipContent
                          hideIndicator
                          labelFormatter={(value) => {
                            return new Date(value).toLocaleDateString("en-US", {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            })
                          }}
                        />
                      }
                      cursor={false}
                    />
                    <ReferenceLine
                      y={1200}
                      stroke="hsl(var(--muted-foreground))"
                      strokeDasharray="3 3"
                      strokeWidth={1}
                    >
                      <Label
                        position="insideBottomLeft"
                        value="Average Steps"
                        offset={10}
                        fill="hsl(var(--foreground))"
                      />
                      <Label
                        position="insideTopLeft"
                        value="12,343"
                        className="text-lg"
                        fill="hsl(var(--foreground))"
                        offset={10}
                        startOffset={100}
                      />
                    </ReferenceLine>
                  </BarChart>
                </ChartContainer>
              </CardContent>
              <CardFooter className="flex-col items-start gap-1">
                <CardDescription>
                  Over the past 7 days, you have walked{" "}
                  <span className="font-medium text-foreground">53,305</span> steps.
                </CardDescription>
                <CardDescription>
                  You need <span className="font-medium text-foreground">12,584</span>{" "}
                  more steps to reach your goal.
                </CardDescription>
              </CardFooter>
            </Card>
          </div>
          </div>
                                
        </div>  

       </div>
            
        <div className="video-section">
        <h2>Videos</h2>
        <div className="video-container">
          <div className="video-item">
            <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' playing width='100%' height='100%' />
          </div>
          <div className="video-item">
            <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' playing width='100%' height='100%' />
          </div>
          <div className="video-item">
            <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' playing width='100%' height='100%' />
          </div>
        </div>
      </div>
     

      
    </div>
  );
}

export default Main;
