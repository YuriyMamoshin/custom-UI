import styled from "styled-components";

export const StyledCheckbox = styled.article`
  padding: 16px;
  position: relative;

  & label {
    display: ${({ label }) => (label ? "inline" : "block")};
    height: ${({ label }) => (label ? "auto" : "12px")};
    width: ${({ label }) => (label ? "auto" : "12px")};

    & input {
      opacity: 0;
      position: absolute;
      left: 12px;
    }

    & span {
      font-family: "Inter", sans-serif;
      font-size: 12px;
    }

    & img {
      width: 12px;
      margin-right: 10px;
    }
  }
`;