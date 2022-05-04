import React from 'react';

const buttonStyle = {
    width: '14%',
    padding: '2%',
    borderRadius: '20px'
};

// sortButton.addEventListener("click", (e) => {
//     shuffleArray()
// })

const Button = ({movies}) => (
  <button
  
    style={buttonStyle}
  >
      Press Me
  </button>
);

export default Button;