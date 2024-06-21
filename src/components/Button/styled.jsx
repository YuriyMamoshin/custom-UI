import styled from "styled-components";

export const StyledButton = styled.button`
  height: 36px;
  border-radius: 8px;
  padding: 12px, 10px;
  font-size: 15px;
  font-family: "Roboto", sans-serif;
  width: ${({ withImage }) => (withImage ? "83px" : "63px")};
  background-color: ${({ primary }) => (primary ? "#00AE1C" : "#FFFFFF")};
  border: 1px solid ${({ primary }) => (primary ? "transparent" : "#DEDFE5")};
  color: ${({ primary }) => (primary ? "#FFFFFF" : "#323749")};

  & img {
    margin-right: 8px;
  }

  &:hover {
    background-color: ${({ primary }) => (primary ? "#00AE1C" : "#EFEFEF")};
    border: 1px solid ${({ primary }) => (primary ? "#5CE171" : "#DEDFE5")};
    color: ${({ primary }) => (primary ? "#FFFFFF" : "#323749")};
  }

  &:active {
    background-color: ${({ primary }) => (primary ? "#0CD52B" : "#E0E0E0")};
    border: 1px solid ${({ primary }) => (primary ? "#5CE171" : "#DEDFE5")};
    color: ${({ primary }) => (primary ? "#FFFFFF" : "#323749")};
  }

  &:disabled {
    background-color: ${({ primary }) => (primary ? "#187727" : "#C8C8C8")};
    border: 1px solid ${({ primary }) => (primary ? "transparent" : "#8D8E91")};
    color: ${({ primary }) => (primary ? "#B9B9B9" : "#737373")};
  }
`;