import React, { useState } from "react";
import { SketchPicker } from "react-color";

const ColorPickerBtn = () => {
  const [isColorPickerOpen, setIsColorPickerOpen] = useState(false);
  const [selectedThemeColor, setSelectedThemeColor] = useState("#3355ff");

  const handleColorPickerVisibilityChange = () => {
    setIsColorPickerOpen((prevState) => !prevState);
  };

  const handleThemeColorChange = (color) => {
    setSelectedThemeColor(color.hex);
  };

  return (
    <div className={"nav-color-picker-container"}>
      <i
        className={"fa fa-eyedropper fa-2x nav-color-picker"}
        onClick={handleColorPickerVisibilityChange}
      />
      <div className="nav-color-picker-picker">
        <SketchPicker
          color={selectedThemeColor}
          onChangeComplete={handleThemeColorChange}
          onChange={handleThemeColorChange}
        />
      </div>
    </div>
  );
};

export default ColorPickerBtn;
