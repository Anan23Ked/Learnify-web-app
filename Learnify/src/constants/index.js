import Icon1 from '../assets/Icons/noun-interactive-7219907.svg'
import Icon3 from '../assets/Icons/noun-quiz-7374567.svg'
import Icon2 from '../assets/Icons/noun-understanding-6602319.svg'
import Icon4 from '../assets/Icons/noun-all-inclusive-7298787.svg'

import PhysicsImg from '../assets/Topics/Physics_img.png'
import ChemistryImg from '../assets/Topics/Chemistry_img.png'
import BiologyImg from '../assets/Topics/Biology_img.png'
import EngineeringImg from '../assets/Topics/Engineering_img.png'

import Level_icon from '../assets/Icons/noun-level-5187033.svg'
import Module_icon from '../assets/Icons/noun-dashboard-2222681.svg'
import Quiz_icon from '../assets/Icons/noun-quiz-7110495.svg'

import PhyModule1 from '../assets/Topics/PhyModule1.png'
import PhyModule2 from '../assets/Topics/PhyModule2.png'
import PhyModule3 from '../assets/Topics/PhyModule3.png'
import PhyModule4 from '../assets/Topics/PhyModule4.png'

import BioModule1 from '../assets/Topics/Biology-images/facial-muscles.webp'
import BioModule2 from '../assets/Topics/Biology-images/human-head.jpg'
import BioModule3 from '../assets/Topics/Biology-images/human-skull.jpg'

export const featureItems = [
    {
        id:1,
        icon: Icon1,
        title: "Fun & Interactive",
        description: "Game-like elements makes learning engaging"
    },
    {
        id:2,
        icon: Icon2,
        title: "Engagement & Motivation",
        description: "Gain deeper understanding of the concepts"
    },
    {
        id:3,
        icon: Icon3,
        title: "Real-time Feedback",
        description: "Instant quiz feedback reinforces key concepts"
    },
    {
        id:4,
        icon: Icon4,
        title: "Accessible & Inclusive",
        description: "Slow Learners grasp concepts faster"
    },
]


export const subjectImages = [
    { id: 1, src: PhysicsImg, name: "Physics" },
    { id: 2, src: ChemistryImg, name: "Chemistry" },
    { id: 3, src: BiologyImg, name: "Biology" },
    { id: 4, src: EngineeringImg, name: "Engineering" },
  
    ]

export const subjects = ["Biology","Physics",  "Chemistry", "Engineering"];

export const stats = [
        { icon: Module_icon, value: 4, label: "Modules Completed" },
        { icon: Level_icon, value: 9, label: "Levels Unlocked" },
        { icon: Quiz_icon, value: 5, label: "Quizzes Attempted" },
    ];

 export const PHYSICS = [
    {
        title: "Electric Circuits",
        image: PhyModule1,
        description: "Build a virtual electric circuit to light up the park and understand the concepts of series and parallel connections.",
        link: ""

    },
    {
        title: "Force & Pressure",
        image: PhyModule2,
        description: "Understand the whys and hows of push and pull actions changes object’s motion using pressure",
        link: ""

    },
    {
        title: "Magnetic Waves",
        image: PhyModule3,
        description: "Help them visualize how electromagnetic wave travel through space, created by movement of electric charges",
        link: ""

    },
    {
        title: "Light Simulation",
        image: PhyModule4,
        description: "Simulate the behavior of light to understand the concepts of reflection, refraction and shadows",
        link: ""

    },

 ]

 export const BIOLOGY = [
    {
        title:"Human Head",
        image: BioModule1,
        description: "Visualize the human head anatomy - skull, brain, sensory organs, muscles, and blood vessels.",
        link: "https://lens.snap.com/experience/34497d7b-d99d-4e87-924c-e1345f64b397"
    },
    {
        title:"Facial Muscles",
        image: BioModule3,
        description: "Explore the role and functions of facial muscles ranging from raising eyebrows to pouting to chewing.",
        link: "https://lens.snap.com/experience/aa29e045-c7dc-47c8-9a5b-8b768217c30c"
    },
    {
        title:"Human Skull",
        image: BioModule2,
        description: "Learn how the skull protects the brain and supports the face, while the brain controls body functions and cognition.",
        link: ""
    },

 ]