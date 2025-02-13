// Landing Page

// import React from "react"

const LandingPage = ()=>{

    const featureItems = [
        {
            id:1,
            icon: "icon",
            title: "Fun & Interactive",
            description: "Game-like elements makes learning engaging"
        },
        {
            id:2,
            icon: "",
            title: "Engagement & Motivation",
            description: "Game-like elements makes learning engaging"
        },
        {
            id:3,
            icon: "",
            title: "Fun & Interactive",
            description: "Game-like elements makes learning engaging"
        },
        {
            id:4,
            icon: "",
            title: "Fun & Interactive",
            description: "Game-like elements makes learning engaging"
        },
    ]


    const subjectImages = [
    { id: 1, src: "https://via.placeholder.com/150", name: "Physics" },
    { id: 2, src: "https://via.placeholder.com/150", name: "Chemistry" },
    { id: 3, src: "https://via.placeholder.com/150", name: "Biology" },
    { id: 4, src: "https://via.placeholder.com/150", name: "Engineering" },
  
    ]
    return(
        <div className="flex flex-col">
            <div>Landing Image</div>
            <div>
                <div className="feature-list flex flex-col p-8 border-b border-textColor">
                <h3 className="text-center">Features</h3>
                <div className="max-w-md mx-auto">
                {featureItems.map((item) => (
                  <div key={item.id} className="flex items-start space-x-4 p-3">
                    {/* Icon */}
                    <div className="text-xl">{item.icon}</div>
          
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
            <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-secondary mb-4">Feedback Form</h2>
            
            <form className="space-y-4">
              {/* Name Input */}
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full p-3 bg-gray-100 text-black placeholder-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primaryBlue"
              />
      
              {/* Email Input */}
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full p-3 bg-gray-100 text-black placeholder-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primaryBlue"
              />
      
              {/* Thoughts Textarea */}
              <textarea 
                placeholder="Your Thoughts..." 
                rows="4"
                className="w-full p-3 bg-gray-100 text-black placeholder-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primaryBlue"
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
export default LandingPage