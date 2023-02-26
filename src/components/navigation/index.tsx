import Styled from "./Navigation.styled";

function Navigation() {
  return (
    <Styled.NavWrapper>
      <Styled.Nav>
        <Styled.LinkHome to="/">PravoVreme</Styled.LinkHome>
      </Styled.Nav>
    </Styled.NavWrapper>
  );
}

export default Navigation;
