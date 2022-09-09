import styled from "styled-components";

export const InfoSignPage = styled.div`
  margin: 3.125rem;
`;

export const MainSignInfo = styled.div`
  background-color: #efe6ee;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  border-radius: 100%;
  height: 12.5rem;
  justify-content: center;
  text-align: center;
  width: 12.5rem;
  & h2 {
    font-family: "Cinzel Decorative", cursive;
    margin-bottom: 0.75rem;
  }
  & p {
    font-family: "Quicksand", sans-serif;
  }
`;

export const DatesSign = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-left: 12.5rem;
`;

export const DateSignButton = styled.input`
  background-color: #503850;
  border: none;
  border-radius: 5px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.3);
  color: #ebebeb;
  cursor: pointer;
  font-family: "Cinzel Decorative", cursive;
  padding: 0.3rem;
  margin: 0.625rem;
  width: 8rem;
  &:hover {
    background-color: #aa6581;
  }
  &:focus{
    background-color: #aa6581;
  }
`;

export const SignsDescription = styled.div`
  display: flex;
`;

export const ExtraSignInfo = styled.div`
  align-items: center;
  color: #503850;
  justify-content: center;
  font-size: 1.125rem;
  margin: 2rem 0 3.125rem 10.375rem;
  max-width: 31.25rem;
  & p {
    font-family: "Quicksand", sans-serif;
    padding: 0.625rem;
  }
`;
