import styled from "styled-components";

export const Card = styled.div`
  background-color: rgba(183, 176, 176, 0.196);
  border-radius: 16px;
  box-shadow: 2px 3px 5px rgba(51, 51, 51, 0.283);
  width: 130px;
  height: 130px;
  margin: 5px;
  padding: 10px;
`;

export const SingleImage = styled.img`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 130px;
  &:hover {
    cursor: pointer;
    background-color: #fff0f5;
    border-radius: 16px;
  }
`;
