// Landing Page
import { featureItems, subjectImages } from '../constants' 
import LandingGIF from '../assets/Design/Landing.gif'
import PropTypes from "prop-types";
import { useNavigate } from 'react-router-dom';

const LandingPage = ()=>{

  const navigate = useNavigate();

  const handleGetStarted = () => {
    console.log("Navigating to signup page"); // Debug log
    navigate('/signup');
  };

  const handleLogin = () => {
    console.log("Navigating to login page"); // Debug log
    navigate('/login');
  };

    return(
        <div className="flex flex-col">
            <div className='flex bg-gradient-to-t from-primaryBG to-secondary justify-around'>
              <img className='border-8 rounded-xl border-white' src={LandingGIF} />
              

  </div>
  <div className="flex flex-col items-center gap-4 w-full">
  <div className="flex justify-center gap-6 w-full max-w-md">
    <div className="flex flex-col items-center w-1/2">
      <p className="text-sm text-gray-600 text-center mb-2">A new user? Click here</p>
      <button 
        className="w-full bg-primaryBlue text-secondary px-4 py-2 border-2 border-darkGray rounded-lg"
        onClick={handleGetStarted}
      >
        Launch App
      </button>
    </div>

    <div className="flex flex-col items-center w-1/2">
      <p className="text-sm text-gray-600 text-center mb-2">Existing user?</p>
      <button 
        onClick={handleLogin}
        className="w-full bg-secondary text-primary border-2 border-darkGray px-4 py-2 rounded-lg"
      >
        Login
      </button>
    </div>
  </div>
</div>



            <div>
                <div className="feature-list flex flex-col p-8 border-b border-textColor">
                <h3 className="text-center">Features</h3>
                <div className="max-w-md mx-auto">
                {featureItems.map((item) => (
                  <div key={item.id} className="flex items-start space-x-4 p-3">
                    {/* Icon */}
                    <img className="h-[48px]" src={item.icon}/>
          
                    {/* Text Content */}
                    <div>
                      <h3 className="text-lg font-bold text-secondary">{item.title}</h3>
                      <p className="text-sm text-darkGray">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
                </div>
            </div>
            <div>
            <div className="subjects">
            <h3 className="text-center">Subjects</h3>
            <p className="text-base">Explore Fascinating concepts in various subjects through AR Experiences</p>
            <div className="max-w-lg mx-auto p-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {subjectImages.map((image) => (
                <div key={image.id} className="flex flex-col items-center">
                  {/* Image with white border */}
                  <img
                    src={image.src}
                    alt={image.name}
                    className="w-24 h-24 object-cover border-4 border-white rounded-lg shadow-md"
                  />
                  {/* Image name */}
                  <p className="text-sm text-darkGray mt-2">{image.name}</p>
                </div>
              ))}
            </div>
          </div>
            </div>
            </div>
            <div className="max-w-md mx-auto  bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-secondary mb-4">Feedback Form</h2>
            
            <form className="space-y-4">
              {/* Name Input */}
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full p-3 bg-gray-100 text-black placeholder-lightGray border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primaryBlue"
              />
      
              {/* Email Input */}
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full p-3 bg-gray-100 text-black placeholder-lightGray border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primaryBlue"
              />
      
              {/* Thoughts Textarea */}
              <textarea 
                placeholder="Your Thoughts..." 
                rows="4"
                className="w-full p-3 bg-gray-100 text-black placeholder-lightGray border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primaryBlue"
              ></textarea>
      
              {/* Submit Button */}
              <button 
                type="submit" 
                className="w-full bg-primaryBlue text-white font-semibold p-3 rounded-md hover:bg-secondary transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
    )
}

LandingPage.propTypes = {
  onGetStarted: PropTypes.bool.isRequired,
  
};
export default LandingPage