import styled from "styled-components";

export const StyledModal = styled.dialog`
  font-family: "Inter", sans-serif;
  width: 488px;
  min-height: 234px;
  padding: 16px;
  box-shadow: 0 16px 50px 0 #0000003d;
  border: none;
  border-radius: 8px;

  &::backdrop {
    background-color: white;
  }

  & header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 25px;
    margin-bottom: 16px;

    & h3 {
      font-size: 24px;
      font-weight: 700;
      height: 25px;
      margin: 0;
    }

    & button {
      width: 12px;
      height: 12px;
      border: none;
      background: transparent url("src/assets/icons/closemark.svg")
        center/contain no-repeat;
    }
  }

  & section {
    border-top: 1px solid #dedfe5;
    padding-top: 16px;
    line-height: 20px;
  }
`;