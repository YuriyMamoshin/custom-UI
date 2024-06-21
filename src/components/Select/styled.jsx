import styled from "styled-components";

export const StyledOption = styled.li`
  font-family: "Inter", sans-serif;
  font-size: 15px;
  padding: 13px 8px 12px;
  background-color: ${({ isSelected }) =>
    isSelected ? "#E3E3E3" : "transparent"};
  list-style-type: none;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: #f6f6f6;
  }
`;

export const StyledSelect = styled.article`
  width: 88px;
  font-family: "Inter", sans-serif;

  & * {
    margin: 0;
    padding: 0;
  }

  & header {
    height: 43px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    border-bottom: 1px solid #323749;
    margin-bottom: 4px;

    & label {
      font-size: 10px;
      font-weight: 700;
    }

    & p {
      font-size: 15px;
      padding-bottom: 10px;
    }
  }

  & main {
    height: 180px;
    overflow: auto;
    scrollbar-color: #dedfe5 transparent;
    scrollbar-width: thin;
    border: 1px solid #dee0e5;
    border-radius: 8px;
    box-shadow: 0 8px 16px 0 #3131311a;
  }
`;