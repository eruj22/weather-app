import { useParams } from "react-router-dom";

import Search from "../../components/search";
import { capitalizeString } from "../../utils/helpers";
import Styled from "./City.styled";

function CityError() {
  const { name } = useParams();

  return (
    <Styled.Main>
      <Styled.Title>Prišlo je do napake</Styled.Title>
      <Styled.OtherErrorText>
        Nepravilno ime: {capitalizeString(name)}
      </Styled.OtherErrorText>
      <Search cityName={name} />
    </Styled.Main>
  );
}

export default CityError;
