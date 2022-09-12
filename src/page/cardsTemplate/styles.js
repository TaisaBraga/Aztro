import styled from "styled-components";

export const HomeTemplate = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row;
  margin: 0 auto;
  max-width: 43.75rem;
`;

export const Icon = styled.div`
  padding: 0.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
`;

export const QuestionDiv = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 2.5rem;

  & h2 {
    color: #855e6e;
    font-family: "Cinzel Decorative", cursive;
    font-size: 1.563rem;
    margin-bottom: 2rem;
  }

  & Form {
    align-items: center;
    background-color: #b8cabe;
    border-radius: 0.313rem;
    display: flex;
    font-family: "Quicksand", sans-serif;
    justify-content: center;
    height: 18.75rem;
    margin-bottom: 1rem;
    padding: 1rem;
    width: 18.75rem;
  }
`;
