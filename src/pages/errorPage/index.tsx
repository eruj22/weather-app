import { useRouteError } from "react-router-dom";

import Navigation from "../../components/navigation";
import Styled from "./ErrorPage.styled";

function ErrorPage() {
  const error = useRouteError() as Error;
  console.error(error);

  return (
    <>
      <Navigation />
      <Styled.Main>
        <Styled.Title>404 napaka</Styled.Title>
        <Styled.Subtitle>Prišlo je do nepričakovane napake</Styled.Subtitle>
        <Styled.Link to="/">Pojdi domov</Styled.Link>
      </Styled.Main>
    </>
  );
}

export default ErrorPage;
