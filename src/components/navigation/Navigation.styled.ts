import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const NAV_HEIGHT = 62;

const NavWrapper = styled.div`
  background-color: #a8dadc;
`;

const Nav = styled.nav`
  width: 90%;
  max-width: 1440px;
  margin-inline: auto;
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LinkHome = styled(Link)`
  font-size: 1.75rem;
`;

export default {
  LinkHome,
  Nav,
  NavWrapper,
};
