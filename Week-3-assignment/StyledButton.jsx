import React from "react";

const StyledButton = () => {
  return (
    <button
      className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-md shadow-lg hover:from-blue-700 hover:to-purple-700 transition duration-300"
      onClick={() => console.log("Button clicked!")}
    >
      Click Me
    </button>
  );
};

export default StyledButton;
