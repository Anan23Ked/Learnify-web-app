import LearnifyLogo from '../assets/Learnify_Logo.png'
import ARLogo from '../assets/Icons/noun-ar-2300882.svg'

const NoModule =() =>{
    return(
        <div>
           <div className='flex w-full text-center flex-col'>
           <div className="flex justify-center">
           <img className="h-[150px] w-[150px]" src={LearnifyLogo} />
         </div>
         <p className='text-xl'>We are yet to develop the perfect AR experience for you for this subject</p>
            <p className='text-base'>Why dont you check out the available subjects and this will get interesting very soon!! </p>
           <div><img className="h-[100px] flex justify-center items-center w-full" src= {ARLogo} /></div>
           <p className='text-base'>We are working towards building</p>
           <p className='text-sm'>✍️ Interactive Practice Exercises</p>
           <p className='text-sm'>🎥 Video Tutorials and Guides</p>
           </div>
        </div>
    )
}

export default NoModule