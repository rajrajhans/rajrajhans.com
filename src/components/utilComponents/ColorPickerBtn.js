import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--theme_color", selectedThemeColor);
  }, [selectedThemeColor]);

  return (
    <div className={"nav-color-picker-container"}>
      <i
        className={"fa fa-eyedropper fa-2x nav-color-picker"}
        onClick={handleColorPickerVisibilityChange}
      />
      {isColorPickerOpen ? (
        <div className="nav-color-picker-picker">
          <SketchPicker
            color={selectedThemeColor}
            onChangeComplete={handleThemeColorChange}
            onChange={handleThemeColorChange}
          />
        </div>
      ) : null}
    </div>
  );
};

export default ColorPickerBtn;
