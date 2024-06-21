import * as React from "react";
import { StyledTextarea } from "src/components/Textarea/styled";
import { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";

export default function Textarea({ label, placeholder }) {
  const textAreaRef = useRef(null);
  const [text, setText] = useState("");

  const textAreaElement = textAreaRef.current;

  useEffect(() => {
    if (textAreaElement) {
      textAreaElement.style.height = "0px";
      const scrollHeight = textAreaElement.scrollHeight;

      textAreaElement.style.height = scrollHeight + "px";
    }
  }, [textAreaElement, text]);

  function onChangeHandler(event) {
    setText(event.target.value);
  }

  return (
    <StyledTextarea >
      <label data-testid="label">{label}</label>

      <textarea
        ref={textAreaRef}
        rows={1}
        onChange={onChangeHandler}
        value={text}
        placeholder={placeholder}
        data-testid="textarea"
      />
    </StyledTextarea>
  );
}

Textarea.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
};