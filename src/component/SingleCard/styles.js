import styled from "styled-components";

export const Card = styled.div`
  background-color: rgba(183, 176, 176, 0.196);
  border-radius: 1rem;
  box-shadow: 0.125rem 0.188rem 0.313rem rgba(51, 51, 51, 0.283);
  width: 8.125rem;
  height: 8.125rem;
  margin: 0.525rem;
  padding: 0.625rem;

  & p{
    color: #DF608C;
    font-family: "Quicksand", sans-serif;
    text-transform: capitalize;
    text-align: center;
  }
`;

export const SingleImage = styled.img`
  display: flex;
  margin: 0 auto;
  width: 7em;
  &:hover {
    cursor: pointer;
    background-color: #fff0f5;
    border-radius: 1rem;
  }
`;
