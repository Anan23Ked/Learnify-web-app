import LearnifyLogo from '../assets/Learnify_logo.png'

const Footer = () =>{
    return(
        <div>
            <div className="flex pt-10 flex-col items-center">
            {/* <div className="flex gap-4 items-center flex-row border-b-2 pb-3 border-lightGray justify-normal w-full"> */}
                <img
                    className="h-[50px] w-auto rounded-lg ml-4 justify-start"
                    src={LearnifyLogo}
                />
                <p className="text-base">Copyright @ 2025</p>
            </div>
            <p className='text-center text-sm'>Made in India </p>
        </div>
        // </div>
    )
}

export default Footer