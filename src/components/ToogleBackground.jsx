import React, { useState } from 'react';

export function ToggleBackgroundColor() {
  const [color, setColor] = useState('blue');
  const toggleColor = () => {
    // setColor(prevColor => prevColor === 'blue' ? 'yellow' : 'blue');
    setColor(function(prevColor) {
        if (prevColor === 'blue') {
            return 'yellow';
        } else {
            return 'blue';
        }
        }
    );
  };

  const divStyle = {
    width: '100px',
    height: '100px',
    backgroundColor: color
  };

  return (
    <div>
      <div style={divStyle}></div>
      <button onClick={toggleColor}>Toggle Color</button>
    </div>
  );
}



