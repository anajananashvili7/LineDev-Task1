import React, { useState, useRef, useEffect } from 'react';

const ColorPicker: React.FC = () => {
  const [color, setColor] = useState<string>('#000000');
  const [showPicker, setShowPicker] = useState<boolean>(false); 
  const colorInputRef = useRef<HTMLInputElement>(null);
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColor(event.target.value);
    setShowPicker(false); 
  };

  const handleClick = () => {
    setShowPicker(!showPicker); 
   
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (colorInputRef.current && !colorInputRef.current.contains(event.target as Node)) {
        setShowPicker(false); 
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="flex flex-col items-center p-4 relative">
        <div className="flex flex-row items-center p-4 relative">
        <div className="text-2xl mr-4">Choose your color!</div>
      
      <input
        type="color"
        value={color}
        onChange={handleChange}
        className="mb-2"
        ref={colorInputRef}
        onClick={handleClick} 
      />
        </div>
   
    
      <div className="flex items-center">
        <div
          className="w-10 h-10 border border-gray-400"
          style={{ backgroundColor: color }}
        ></div>
        <span className="ml-2 text-lg">{color}</span>
      </div>
    </div>
  );
};

export default ColorPicker;

