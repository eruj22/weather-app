import styled from "@emotion/styled";

import { NAV_HEIGHT } from "../../components/navigation/Navigation.styled";

const Main = styled.main`
  width: 90%;
  max-width: 500px;
  margin-inline: auto;
  min-height: calc(100vh - ${NAV_HEIGHT}px);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1`
  margin-bottom: 10vh;
`;

const IconWrapper = styled.div`
  width: 150px;
  height: 150px;

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;

const TempAndIconWrapper = styled.div`
  display: flex;
  gap: 50px;
  align-items: center;
  margin-bottom: 10vh;
`;

const TempWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Temp = styled.span`
  font-size: 5rem;

  @media (max-width: 768px) {
    font-size: 3.5rem;
  }
`;

const TempSmall = styled.span`
  font-size: 2.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const TempFeeling = styled.span`
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 1.6125rem;
  }
`;

const OtherFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const OtherText = styled.span`
  font-size: 1.75rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const OtherErrorText = styled(OtherText)`
  margin-bottom: 30px;
`;

export default {
  IconWrapper,
  Main,
  OtherErrorText,
  OtherFlex,
  OtherText,
  Temp,
  TempAndIconWrapper,
  TempFeeling,
  TempSmall,
  TempWrapper,
  Title,
};
