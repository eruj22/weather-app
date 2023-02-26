import styled from "@emotion/styled";

import { NAV_HEIGHT } from "../../components/navigation/Navigation.styled";

const Main = styled.main`
  width: 90%;
  max-width: 600px;
  margin-inline: auto;
  min-height: calc(100vh - ${NAV_HEIGHT}px);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1`
  margin-bottom: 10vh;

  @media (max-width: 600px) {
    margin-top: 50px;
  }
`;

const SuggestionsTitle = styled.h2`
  margin-top: 50px;
`;

const SuggestionsGrid = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 425px) {
    grid-template-columns: 1fr;
  }
`;

const SuggestionsText = styled.span`
  font-size: 1.25rem;
`;

export default {
  Main,
  SuggestionsGrid,
  SuggestionsText,
  SuggestionsTitle,
  Title,
};
