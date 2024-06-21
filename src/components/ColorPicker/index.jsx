import * as React from "react";
import PropTypes from "prop-types";
import { StyledColorPicker, StyledColor } from "src/components/ColorPicker/styled";
import { useState } from "react";

export default function ColorPicker({ colors, label }) {
  const [chosenColor, setChosenColor] = useState(null);

  const gridColumns = Math.floor(colors.length / 2);

  const colorsContent = colors.map((color) => (
    <StyledColor backgroundColor={color} checked={chosenColor === color}>
      <input
        type="radio"
        checked={chosenColor === color}
        value={color}
        onChange={() => setChosenColor(color)}
      />
      <div></div>
    </StyledColor>
  ));

  return (
    <StyledColorPicker columns={gridColumns} data-testid="color-picker">
      <label>{label}</label>

      <form>{colorsContent}</form>
    </StyledColorPicker>
  );
}

ColorPicker.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string),
  label: PropTypes.number,
};