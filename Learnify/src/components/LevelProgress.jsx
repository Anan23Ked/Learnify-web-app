import PropTypes from "prop-types";



const SimpleProgressBar = ({ progress = 0 , level = "Completed"}) => {
  return (
    <div className="w-full mt-5">
      <div className="flex justify-between items-center">
        <span className="font-medium">{level}</span>
        <span className="font-bold">{progress}%</span>
      </div>
      <div className="w-full h-5 border-2 border-lightGray rounded-md overflow-hidden bg-lightGray mt-2">
        <div
          className="h-full bg-primaryBlue transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

// Prop Validation
SimpleProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
  level: PropTypes.string.isRequired
};

export default SimpleProgressBar;
