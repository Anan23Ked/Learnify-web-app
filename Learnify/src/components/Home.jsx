import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useState } from 'react'
import Face_2 from '../assets/Design/Face-2.png'
import Level_icon from '../assets/Icons/noun-level-5187033.svg'
import Module_icon from '../assets/Icons/noun-dashboard-2222681.svg'
import Quiz_icon from '../assets/Icons/noun-quiz-7110495.svg'
import MultiStepProgressBar from "./Dashboard";
import LevelProgress from "./LevelProgress";
import Progress from 'react-circle-progress-bar'
import LevelQuizElement from '../assets/Design/LevelQuiz.png'
import Time from '../assets/Icons/noun-time-2741435.svg'



const Home = () => {

    const [val, setVal] = useState('two');
    const handleTab = (e, newVal) => {
        setVal(newVal);
    };

    return (
        <div>
            <div className="flex gap-4 items-center flex-row border-b-2 pb-3 border-lightGray justify-normal w-full">
                <img
                    className="h-[50px] w-auto rounded-lg ml-4 justify-start"
                    src={Face_2}
                />
                <p className='text-lg'>Hello Neil!</p>
            </div>


            <div className="flex flex-row justify-between items-center gap-4 m-4 container mx-auto px-4">
                {/* Component 1 */}
                <div className="bg-white border-2 border-primaryBlue flex-1 flex flex-col items-start leading-tight rounded-xl shadow-md min-h-[100px] max-w-[110px] p-2">
                    <img className="h-[24px] w-auto rounded-lg" src={Module_icon} alt="Modules" />
                    <div className="text-4xl w-full text-center leading-none">4</div>
                    <div className="text-xxs text-gray-600 w-full text-center">Modules Completed</div>
                </div>

                {/* Component 2 */}
                <div className="bg-white border-2 border-primaryBlue flex-1 flex flex-col items-start leading-tight rounded-xl shadow-md min-h-[100px] max-w-[110px] p-2">
                    <img className="h-[24px] w-auto rounded-lg" src={Level_icon} alt="Levels" />
                    <div className="text-4xl w-full text-center leading-none">9</div>
                    <div className="text-xxs text-gray-600 w-full text-center">Levels Unlocked</div>
                </div>

                {/* Component 3 */}
                <div className="bg-white border-2 border-primaryBlue flex-1 flex flex-col items-start leading-tight rounded-xl shadow-md min-h-[100px] max-w-[110px] p-2">
                    <img className="h-[24px] w-auto rounded-lg" src={Quiz_icon} alt="Quizzes" />
                    <div className="text-4xl w-full text-center leading-none">5</div>
                    <div className="text-xxs text-gray-600 w-full text-center">Quizzes Attempted</div>
                </div>
            </div>

            <div >
                <Box className="bg-white">
                    <Tabs
                        value={val}
                        onChange={handleTab}
                        TabIndicatorProps={{
                            style: {
                                backgroundColor: "#02C8DA", height: 5
                            }
                        }}
                    >
                        <Tab value="Physics" label="Physics"
                            sx={{
                                backgroundColor: "white", color: "black",
                                textTransform: "none",
                                "&.Mui-selected": {
                                    backgroundColor: "white",
                                    color: "black",
                                }
                            }}
                        />
                        <Tab value="Biology" label="Biology"
                            sx={{
                                backgroundColor: "white", color: "black",
                                textTransform: "none",
                                "&.Mui-selected": {
                                    backgroundColor: "white",
                                    color: "black",
                                }
                            }}
                        />
                        <Tab value="Chemistry" label="Chemistry"
                            sx={{
                                backgroundColor: "white", color: "black",
                                textTransform: "none",
                                "&.Mui-selected": {
                                    backgroundColor: "white",
                                    color: "black",
                                }
                            }}
                        />
                        <Tab value="Engineering" label="Engineering" disabled
                            sx={{
                                backgroundColor: "white", color: "black",
                                textTransform: "none",
                                "&.Mui-selected": {
                                    backgroundColor: "white",
                                    color: "black",
                                }
                            }}
                        />
                    </Tabs>
                </Box>

                <div className="pt-4">
                    {val === "Physics" &&
                        <div className=" bg-white border rounded-lg border-darkGray">
                            <div className="ml-4 mt-4 mb-4 justify-between items-center ">
                                <p className="text-xl">Electric Circuits</p>

                                <div className="flex flex-row border-b-2 pb-4">
                                    <div className="flex flex-col">
                                        <p className="text-base">Your Progress</p>
                                        <MultiStepProgressBar completedSteps={3} />
                                    </div>
                                    <div className="flex flex-col">
                                        <Progress style={{ width: "100px", height: "100px" }} strokeWidth={6} progress={75} subtitle="Quiz Score 15/70" />
                                        <div className="flex flex-col">
                                            <img className="h-[48px]" src={Time} />
                                            <p className="text-xs text-center">Avg Time Required:<br></br>20 mins</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-row">
                                    <div className="w-[300px]">
                                        <LevelProgress progress={50} level="Level 1: Simple Circuits" />
                                    </div>
                                    <div className="items-center">
                                        <img src={LevelQuizElement} ></img>
                                    </div>
                                </div>

                                <div className="flex flex-row">
                                    <div className="text-center w-[300px]">
                                        <LevelProgress progress={20} level="Level 1: Simple Circuits" />
                                    </div>
                                    <div className="text-center  flex justify-around text-xs">
                                        Yet to Begin Quiz
                                    </div>
                                </div>
                                </div>
                        </div>}


                    {val === "two" && <div>🎥 Video Tutorials and Guides</div>}
                    {val === "three" && <div>✍️ Interactive Practice Exercises</div>}
                    {val === "four" && <div>📝 Blog Posts and Articles</div>}
                </div>
            </div>

        </div>
    )
}

export default Home