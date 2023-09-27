import React, { useState } from 'react';

export function DynamicTextSize() {
  const [textSize, setTextSize] = useState(16); // Default text size

  const handleSliderChange = (e) => {
    console.log(e);
    setTextSize(Number(e.target.value));
  };

  const textStyle = {
    fontSize: `${textSize}px`,
  };

  return (
    <div>
      <h1 style={textStyle}>Dynamic Text Size</h1>
      <input
        type="range"
        min="12"
        max="48"
        value={textSize}
        onChange={handleSliderChange}
      />
      <p>Current size: {textSize}px</p>
    </div>
  );
}