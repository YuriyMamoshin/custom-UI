import * as React from "react";
import PropTypes from "prop-types";
import { StyledButton } from "src/components/Button/styled";

export default function Button({
  primary,
  disabled,
  withImage,
  label,
  onClick,
  ...props
}) {
  return (
    <StyledButton
      withImage={withImage}
      primary={primary}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {withImage && (
        <img
          src={`src/assets/icons/play-${primary ? "primary" : "secondary"}${disabled ? "-disabled" : ""}.svg`}
          alt="play sign"
        />
      )}
      {label}
    </StyledButton>
  );
}

Button.propTypes = {
  primary: PropTypes.bool,
  disabled: PropTypes.bool,
  withImage: PropTypes.bool,
  label: PropTypes.string,
  onClick: PropTypes.func,
};