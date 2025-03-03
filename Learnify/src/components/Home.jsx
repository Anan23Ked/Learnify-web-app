import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useState } from 'react'
import Face_2 from '../assets/Design/Face-2.png'
import MultiLevelProgressBar from "./MultiLevelProgressBar";
import LevelProgress from "./LevelProgress";
import Progress from 'react-circle-progress-bar'
import Time from '../assets/Icons/noun-time-2741435.svg'
import QuizNull from '../assets/Design/QuizNull.png'
import { stats, subjects } from '../constants'
import NoModule from "./NoModule";


const Home = () => {

    const [val, setVal] = useState('Biology');
    const handleTab = (e, newVal) => {
        setVal(newVal);
    };
    const tabStyles = {
        backgroundColor: "white",
        color: "black",
        textTransform: "none",
        "&.Mui-selected": {
            backgroundColor: "white",
            color: "black",
        },
    };
    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex items-center flex-row border-b-2 pb-3 border-lightGray justify-normal w-full">
                <img
                    className="h-[50px] w-auto rounded-lg ml-4 justify-start"
                    src={Face_2}
                />
                <p className='text-lg m-2'>Hello Neil!</p>
            </div>
            <div className="flex flex-row justify-between items-center gap-4 m-4 container mx-auto px-4">
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className="bg-white border-2 border-primaryBlue flex-1 flex flex-col items-start leading-tight rounded-xl shadow-md min-h-[100px] max-w-[110px] p-2"
                    >
                        <img className="h-[24px] w-auto rounded-lg" src={stat.icon} alt={stat.label} />
                        <div className="text-4xl w-full text-center leading-none">{stat.value}</div>
                        <div className="text-xxs text-gray-600 w-full text-center">{stat.label}</div>
                    </div>
                ))}
            </div>
            <div >
                <Box className="bg-white">
                    <Tabs
                        value={val}
                        onChange={handleTab}
                        TabIndicatorProps={{
                            style: { backgroundColor: "#02C8DA", height: 5 },
                        }}
                    >
                        {subjects.map((subject) => (
                            <Tab key={subject} value={subject} label={subject} sx={tabStyles} />
                        ))}
                    </Tabs>
                </Box>
                <div className="pt-1">
                    {val === "Physics" &&
                        <div>
                        <div className="pb-2 bg-white border rounded-lg border-darkGray">
                            <div className=" justify-between items-center ">
                                <p className="m-4 justify-start text-xl">Electric Circuits</p>
                                <p className="m-4 text-base justify-start">Your Progress</p>
                                <div className="flex flex-row border-b-2 pb-4 items-center ">
                                    <MultiLevelProgressBar completedSteps={2} ARLink= "https://lens.snap.com/experience/2f89d9d9-ce58-4098-b450-eb34c27bbeef" />
                                    <div className="flex flex-col items-center">
                                        {/* Progress in Center */}
                                        <Progress style={{ width: "75px", height: "75px" }} strokeWidth={10} progress={75} subtitle="Quiz Score 15/70" ballStrokeWidth={20} />

                                        {/* Time Info Below Progress */}
                                        <div className="flex flex-row items-center mt-4 ">
                                            <img className="h-[32px]" src={Time} />
                                            <p className="text-xs text-center">Avg Time:<br />20 mins</p>

                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-row items-center justify-center gap-4">
                                    {/* Progress Bar */}
                                    <div className="w-[250px] flex items-center">
                                        <LevelProgress progress={50} level="Level 1: Simple Circuits" />
                                    </div>

                                    
                                </div>

                                <div className="flex flex-row items-center justify-center gap-4">
                                    {/* Progress Bar */}
                                    <div className="w-[250px] flex items-center">
                                        <LevelProgress progress={20} level="Level 2: Series Circuits" />
                                    </div>

                                    {/* Quiz Image */}
                                    <div className="flex flex-col m-2 items-center">
                                        <img src={QuizNull} className="h-auto  pt-2 max-w-full" />
                                        <p className="text-xs">Score: N/A</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                    
                        </div>}


                    {val === "Biology" &&
                        <div>
                     <div className=" mb-4 pb-2 bg-white border rounded-lg border-darkGray">
                     <div className=" justify-between items-center ">
                         <p className="m-4 justify-start text-xl">Human Head</p>
                         <p className="m-4 text-base justify-start">Your Progress</p>
                         <div className="flex flex-row border-b-2 pb-4 items-center ">
                             <MultiLevelProgressBar completedSteps={2} ARLink="https://lens.snap.com/experience/34497d7b-d99d-4e87-924c-e1345f64b397"/>
                             <div className="flex flex-col items-center">
                                 {/* Progress in Center */}
                                 <Progress style={{ width: "75px", height: "75px" }} strokeWidth={10} progress={50} subtitle="Quiz Score 5/15" />

                                 {/* Time Info Below Progress */}
                                 <div className="flex flex-row items-center mt-4 ">
                                     <img className="h-[32px]" src={Time} />
                                     <p className="text-xs text-center">Avg Time:<br />10 mins</p>

                                 </div>
                             </div>
                         </div>

                         <div className="flex flex-row items-center justify-center gap-4">
                             {/* Progress Bar */}
                             <div className="w-[250px] flex items-center">
                                 <LevelProgress progress={70} level="Level 1: Face Anatomy" />
                             </div>

                             {/* Quiz Image */}
                             <div className="flex pt-3 flex-col  items-center">
                             <Progress style={{ width: "45px", height: "45px" }} strokeWidth={15} progress={70}  subtitle="Quiz"  />

                                 <p className="text-xs">Score: 3/5</p>
                             </div>
                         </div>

                         <div className="flex flex-row items-center justify-center gap-4">
                             {/* Progress Bar */}
                             <div className="w-[250px] flex items-center">
                                 <LevelProgress progress={10} level="Level 2: Head Structure" />
                             </div>

                             {/* Quiz Image */}
                             <div className="flex flex-col items-center">
                                 <img src={QuizNull} className="h-auto  mt-2 max-w-full" />
                                 <p className="text-xs">Score: N/A</p>
                             </div>
                         </div>
                     </div>
                 </div>
                  
                 <div className="pb-2 mb-4  bg-white border rounded-lg border-darkGray">
                     <div className=" justify-between items-center ">
                         <p className="m-4 justify-start text-xl">Facial Muscles</p>
                         <p className="m-4 text-base justify-start">Your Progress</p>
                         <div className="flex flex-row border-b-2 pb-4 items-center ">
                             <MultiLevelProgressBar completedSteps={1} ARLink="https://lens.snap.com/experience/aa29e045-c7dc-47c8-9a5b-8b768217c30c"/>
                             <div className="flex flex-col items-center">
                                 {/* Progress in Center */}
                                 <Progress style={{ width: "75px", height: "75px" }} strokeWidth={10} progress={60} subtitle="Quiz Score 5/15" />

                                 {/* Time Info Below Progress */}
                                 <div className="flex flex-row items-center mt-4 ">
                                     <img className="h-[32px]" src={Time} />
                                     <p className="text-xs text-center">Avg Time:<br />10 mins</p>

                                 </div> 
                             </div>
                         </div>

                         <div className="flex flex-row items-center justify-center gap-4">
                             {/* Progress Bar */}
                             <div className="w-[250px] flex items-center">
                                 <LevelProgress progress={90} level="Level 1: Muscles Movements" />
                             </div>

                             {/* Quiz Image */}
                             <div className="flex pt-3 flex-col  items-center">
                             <Progress style={{ width: "45px", height: "45px" }} strokeWidth={15} progress={20}  subtitle="Quiz"  />

                                 <p className="text-xs">Score: 3/5</p>
                             </div>
                         </div>

                         <div className="flex flex-row items-center justify-center gap-4">
                             {/* Progress Bar */}
                             <div className="w-[250px] flex items-center">
                                 <LevelProgress progress={50} level="Level 2: Muscles Functionalities" />
                             </div>

                             {/* Quiz Image */}
                             <div className="flex flex-col items-center">
                                 <img src={QuizNull} className="h-auto  mt-2 max-w-full" />
                                 <p className="text-xs">Score: N/A</p>
                             </div>
                         </div>
                     </div>
                 </div>

                 <div className="pb-2 mb-4  bg-white border rounded-lg border-darkGray">
                     <div className=" justify-between items-center ">
                         <p className="m-4 justify-start text-xl">Human Skull</p>
                         <p className="m-4 text-base justify-start">Your Progress</p>
                         <div className="flex flex-row border-b-2 pb-4 items-center ">
                             <MultiLevelProgressBar completedSteps={1} ARLink="https://lens.snap.com/experience/2eda2214-553c-436f-a74d-f52f24829809"/>
                             <div className="flex flex-col items-center">
                                 {/* Progress in Center */}
                                 <Progress style={{ width: "75px", height: "75px" }} strokeWidth={10} progress={70} subtitle="Quiz Score 7/10" />

                                 {/* Time Info Below Progress */}
                                 <div className="flex flex-row items-center mt-4 ">
                                     <img className="h-[32px]" src={Time} />
                                     <p className="text-xs text-center">Avg Time:<br />10 mins</p>

                                 </div> 
                             </div>
                         </div>

                         <div className="flex flex-row items-center justify-center gap-4">
                             {/* Progress Bar */}
                             <div className="w-[250px] flex items-center">
                                 <LevelProgress progress={70} level="Level 1: Bone Functionalities" />
                             </div>

                             {/* Quiz Image */}
                             <div className="flex pt-3 flex-col  items-center">
                             <Progress style={{ width: "45px", height: "45px" }} strokeWidth={15} progress={70}  subtitle="Quiz"  />

                                 <p className="text-xs">Score: 3/5</p>
                             </div>
                         </div>

                     </div>
                 </div>

                     </div>
                    }
                    {val === "Chemistry" && <div><NoModule /></div>}
                    {val === "Engineering" && <div><NoModule /></div>}

                </div>
            </div>

        </div>
    )
}

export default Home