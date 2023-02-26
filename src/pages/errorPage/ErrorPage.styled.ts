import styled from "@emotion/styled";
import { Link as RouterLink } from "react-router-dom";

import { NAV_HEIGHT } from "../../components/navigation/Navigation.styled";

const Main = styled.main`
  width: 90%;
  max-width: 390px;
  margin-inline: auto;
  min-height: calc(100vh - ${NAV_HEIGHT}px);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1`
  margin-bottom: 50px;
`;

const Subtitle = styled.span`
  font-size: 1.75rem;
`;

const Link = styled(RouterLink)`
  margin-top: 30px;
  font-size: 1.5rem;
  padding: 4px 12px;
  border-radius: 6px;
  background-color: #457b9d;
  color: #f1faee;
  width: fit-content;
`;

export default {
  Link,
  Main,
  Subtitle,
  Title,
};
