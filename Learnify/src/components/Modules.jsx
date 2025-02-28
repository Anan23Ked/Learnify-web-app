import { useState, useEffect } from 'react';
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import LearnifyLogo from '../assets/Learnify_Logo.png'
import ARLogo from '../assets/Icons/noun-ar-white.svg'
import { PHYSICS, BIOLOGY } from '../constants';


const Modules = ({ item }) => {

    const [showModal, setShowModal] = useState(false);

    const [val, setVal] = useState('Biology');
    const handleTab = (e, newVal) => {
        setVal(newVal);
    };

    useEffect(() => {
        const returnTo = sessionStorage.getItem('returnTo');
        if (returnTo) {
            sessionStorage.removeItem('returnTo');
            window.history.replaceState(null, '', returnTo);
        }
    }, [])

    const handleLaunchClick = (e, currentItem) => {
        // Use the currentItem passed to the function or fall back to the component prop
        const linkItem = currentItem || item;
        
        if (!linkItem?.link) {
            e.preventDefault();
            setShowModal(true);
        } else {
            // Save current location before navigating
            // const currentPage = window.location.href;
            // // Store it in session storage
            // sessionStorage.setItem('returnTo', currentPage);
            // window.open(linkItem, "_self");

            sessionStorage.setItem('returnTo', window.location.href); // Save current page
            window.location.href = linkItem.link; 
        }
    };

    return (
        <div className="w-full max-w-full overflow-x-hidden">

            <div className="flex border-b-2 pb-3 justify-center items-center border-lightGray w-full">
                <img
                    className="h-[100px] w-auto rounded-lg"
                    src={LearnifyLogo}
                />
            </div>

            <p className='m-4 text-3xl font-medium'>Subjects</p>

            <Box className="p-2 overflow-x-auto">
                <Tabs
                    value={val}
                    onChange={handleTab}
                    TabIndicatorProps={{ style: { display: "none" } }} // Hide indicator line
                    sx={{
                        display: "flex",
                        justifyContent: "start",
                        minHeight: "auto"
                    }}
                >
                    {["Biology", "Physics", "Chemistry", "Engineering"].map((label, index) => (
                        <Tab
                            key={index}
                            value={label}
                            label={label}
                            disabled={["Engineering", "Chemistry"].includes(label)}

                            sx={{
                                borderRadius: 2,
                                paddingX: 3,
                                paddingY: 1,
                                backgroundColor: val === label ? "darkGray" : "white",
                                color: "black",
                                textTransform: "none",
                                transition: "background-color 0.3s",
                                fontSize: "0.75rem",
                                "&:hover": {
                                    backgroundColor: "#f0f0f0"
                                },
                                "&.Mui-selected": {
                                    backgroundColor: "darkGray",
                                    color: "black"
                                },
                                minHeight: "40px",
                                marginRight: "8px"
                            }}
                        />
                    ))}
                </Tabs>
            </Box>

            {val === "Physics" &&
                <div className="px-2 sm:px-4">
                    <p className="text-lg font-medium">Physics Modules</p>
                    <div>
                        {PHYSICS.map((item, index) => (


                            <div key={index} className="flex flex-row items-center pb-6 gap-6">
                                {/* Module Info */}
                                <div
                                    className="ModuleInfo flex flex-row items-center gap-4">
                                    <img className="h-[100px] w-[100px] object-contain" src={item.image} />
                                    <div className="flex flex-col justify-center flex-1 min-w-0">
                                        <p className="text-lg font-semibold">{item.title}</p>
                                        <p className="text-xs">{item.description}</p>
                                    </div>
                                </div>


                                <div className="flex flex-col items-center gap-2">
                                    {/* Progress Bar */}
                                    {/* <div className="w-full h-[50px]">
                        <LevelProgress progress={50} />

                    </div> */}
                                    
                                    <a
                                        href={item.link || "#"}
                                       
                                        onClick={(e) => handleLaunchClick(e, item)}
                                        className="bg-secondary border-2 border-primaryBlue rounded-xl flex flex-row items-center justify-center px-3 py-2 gap-2"
                                    >
                                        <img className="h-[24px] w-[24px] mt-1" src={ARLogo} />
                                        <p className="text-base pr-2 text-white">Launch</p>
                                    </a>

                                    {/* Modal */}
                                    {showModal && (
                                        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                                            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                                                <p className="text-lg font-semibold mb-4">Hold on Learner🫷 <br />We are building the best experience for you 😊</p>
                                                <button
                                                    onClick={() => setShowModal(false)}
                                                    className="bg-primaryBlue text-white px-4 py-2 rounded-md"
                                                >
                                                    Okay
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            }
            {val === "Biology" &&
                <div className="m-4">
                    <p className="text-lg font-medium">Biology Modules</p>
                    <div>
                        {BIOLOGY.map((item, index) => (


                            <div key={index} className="flex flex-row items-center pb-6 gap-6">
                                {/* Module Info */}
                                <div
                                    className="ModuleInfo flex flex-row items-center gap-4">
                                    <img className="h-[100px] w-[100px] object-contain" src={item.image} />
                                    <div className="flex flex-col justify-center">
                                        <p className="text-lg font-semibold">{item.title}</p>
                                        <p className="text-xs">{item.description}</p>
                                    </div>
                                </div>

                                {/* Progress and Launch Button */}
                                <div className="flex flex-col items-center gap-2">
                                    {/* Progress Bar */}
                                    {/* <div className="w-full h-[4px]">
                <LevelProgress progress={50} />
            </div> */}
prr{item.link}
                                    <a
                                        href={item.link || "#"}
                                        onClick={handleLaunchClick}
                                        className="bg-secondary border-2 border-primaryBlue rounded-xl flex flex-row items-center justify-center px-3 py-2 gap-2"
                                    >
                                        <img className="h-[24px] w-[24px] mt-1" src={ARLogo} />
                                        <p className="text-base pr-2 text-white">Launch</p>
                                    </a>

                                    {/* Modal */}
                                    {showModal && (
                                        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                                            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                                                <p className="text-lg font-semibold mb-4">Hold on Learner🫷 <br />We are building the best experience for you 😊</p>
                                                <button
                                                    onClick={() => setShowModal(false)}
                                                    className="bg-primaryBlue text-white px-4 py-2 rounded-md"
                                                >
                                                    Okay
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>}

        </div>


    )
}

export default Modules