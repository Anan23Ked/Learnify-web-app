import LearnifyLogo from '../assets/Learnify_Logo.png'
import ARLogo from '../assets/Icons/noun-ar-2300882.svg'
import { useNavigate } from 'react-router-dom';
import PropTypes from "prop-types";

const WelcomeScreen =({onGetStarted}) =>{
    const navigate = useNavigate();
    return(
        <div>
           <div className='flex w-full text-center flex-col'>
           <div className="flex justify-center">
           <img className="h-[150px] w-[150px]" src={LearnifyLogo} />
         </div>
         <p className='text-xl'>Hello Enthusiastic Learner!!</p>
            <p className='text-base'>So glad you are here! </p>
           <div><img className="h-[100px] flex justify-center items-center w-full" src= {ARLogo} /></div>
           <p className='text-base'>Wanna get started right away? </p>
           <button
        type="submit"
        className=" rounded-md bg-secondary px-3 py-1.5 text-sm font-semibold  text-white shadow-sm hover:bg-primaryBlue hover:text-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={() =>{
            onGetStarted()
            navigate('/modules')
        }}
        >
       Gear Up!
      </button>

      <p className='pt-4 text-sm'>Wondering what could you expect here?</p>
      <p className='text-sm'>🎮 AR Gamified Learnig</p>
      <p className='text-sm'>📲 Personalised Dashboard </p>
           <p className='text-sm'>✍️ Interactive Practice Exercises</p>
           <p className='text-sm'>🎥 Video Tutorials and Guides</p>
           </div>

        </div>
    )
}

WelcomeScreen.propTypes = {
    onGetStarted: PropTypes.func.isRequired,
    
  };
export default WelcomeScreen