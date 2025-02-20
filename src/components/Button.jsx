import React from "react";

const Button = ({ text, onClick, className }) => {
    return (
      <button 
        onClick={onClick} 
        className={`bg-blue-500 text-white px-4 py-2 rounded-lg ${className}`}
      >
        {text}
      </button>
    );
  };
  
  export default Button;
  