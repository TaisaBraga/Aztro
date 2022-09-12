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
    font-size: 25px;
    margin-bottom: 3rem;
  }

  & Form {
    align-items: center;
    background: #855e6e;
    border-radius: 5px;
    box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.450);
    display: flex;
    justify-content: center;
    height: 200px;
    margin-bottom: 30px;
    width: 600px;
  }
`;
