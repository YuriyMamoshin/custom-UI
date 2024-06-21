import * as React from "react";
import PropTypes from "prop-types";
import { StyledCheckbox } from "src/components/Checkbox/styled";
import { useState } from "react";

export default function Checkbox({ label }) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <StyledCheckbox label={label}>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => setIsChecked((prevIsChecked) => !prevIsChecked)}
        />
        <img
          src={`src/assets/icons/${isChecked ? "checked" : "unchecked"}.svg`}
        />
        {label && <span data-testid="label">{label}</span>}
      </label>
    </StyledCheckbox>
  );
}

Checkbox.propTypes = {
  label: PropTypes.string,
};