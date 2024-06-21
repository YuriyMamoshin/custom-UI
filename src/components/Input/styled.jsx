import styled from "styled-components";

export const StyledInput = styled.article`
  height: 40px;
  width: 300px;
  font-family: "Inter", sans-serif;
  border: none;
  outline: none;
  display: flex;
  flex-direction: column;
  position: relative;

  & label {
    color: #323749;
    font-size: 10px;
    font-weight: 700;
  }

  & input {
    font-size: 15px;
    color: #323749;
    outline: none;
    border: none;
    border-bottom: 1px solid ${({ error }) => (error ? "#FF5620" : "#737373")};
    margin-top: 7px;
    padding-bottom: 13px;

    &:focus {
      border-color: #323749;
    }

    &:disabled {
      color: #737373;
      border-color: #737373;
      background-color: transparent;
    }
  }

  & img {
    width: 12px;
    position: absolute;
    right: 9px;
    top: 22px;
  }
  & p {
    color: #ff5620;
  }
`;