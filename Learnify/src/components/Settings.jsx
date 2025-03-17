
import LearnifyLogo from '../assets/Learnify_Logo.png'
import ARLogo from '../assets/Icons/noun-ar-2300882.svg'
import { useNavigate } from 'react-router-dom';


const Settings = () =>{
    const navigate = useNavigate();

    const handleLogout =(e)=>{
        e.preventDefault()
        localStorage.removeItem("isAuthenticated")
        navigate("/")
    }
    return(
       <div>
           <div className='flex w-full text-center flex-col'>
           <div className="flex justify-center">
           <img className="h-[150px] w-[150px]" src={LearnifyLogo} />
         </div>
         <p className='text-xl'>Hello Neil! <br />
         You are an Enthusiastic Learner!!</p>
            <p className='pt-4 text-base text-secondary'>We hope your learning experience was as remarkable as you ! </p>
           <div><img className="h-[100px] flex justify-center items-center w-full" src= {ARLogo} /></div>
           <p className='pt-4 text-base'>Share us your Experience </p>
           <div className=' p-4'>

           
           <button
       
        className="pt-4 pb-4 rounded-md bg-secondary px-3 py-1.5 text-sm font-semibold  text-white shadow-sm hover:bg-primaryBlue hover:text-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={handleLogout}
        >
       Logout
      </button>
</div>
    
           </div>

        </div>
    )
}

export default Settings