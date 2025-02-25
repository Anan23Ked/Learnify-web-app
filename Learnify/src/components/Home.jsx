import Face_2 from '../assets/Design/Face-2.png'
import Level_icon from '../assets/Icons/noun-level-5187033.svg'
import Module_icon from '../assets/Icons/noun-dashboard-2222681.svg'
import Quiz_icon from '../assets/Icons/noun-quiz-7110495.svg'


const Home = () => {
    return (
        <div>
      <div className="flex gap-4 items-center flex-row border-b-2 pb-3 border-lightGray justify-normal w-full">
    <img
        className="h-[50px] w-auto rounded-lg justify-start"
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

            <div></div>

        </div>
    )
}

export default Home