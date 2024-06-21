import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { StyledSelect, StyledOption } from "src/components/Select/styled";
import PropTypes from "prop-types";

export default function Select({ label, options, placeholder }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isMenuShown, setIsMenuShown] = useState(false);

  const selectRef = useRef(null);

  useEffect(() => {
    function clickHandler(event) {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsMenuShown(false);
      }
    }

    window.addEventListener("click", clickHandler);
    return () => window.removeEventListener("click", clickHandler);
  }, []);

  function toggleMenu() {
    setIsMenuShown(!isMenuShown);
  }

  function handleSelectedOption(option) {
    setSelectedOption(option);
    toggleMenu();
  }

  const optionsContent = options.map((option) => {
    return (
      <StyledOption
        key={option.value}
        onClick={() => handleSelectedOption(option)}
        isSelected={selectedOption?.value === option.value}
      >
        {option.label}
      </StyledOption>
    );
  });

  return (
    <StyledSelect ref={selectRef}>
      <header onClick={toggleMenu} data-testid="dropdown-toggle">
        <label>{label}</label>
        <p data-testid="output">
          {selectedOption ? selectedOption.label : placeholder}
        </p>
      </header>
      {isMenuShown && (
        <main data-testid="dropdown">
          <ul>{optionsContent}</ul>
        </main>
      )}
    </StyledSelect>
  );
}

Select.propTypes = {
  label: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object),
  placeholder: PropTypes.string,
};
