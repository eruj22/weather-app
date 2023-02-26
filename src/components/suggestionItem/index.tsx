import { Link } from "react-router-dom";

import {
  capitalizeString,
  convertKelvinToCelsius,
  formatDate,
} from "../../utils/helpers";
import Styled from "./SuggestionItem.styled";

type SuggestionItemProps = {
  date: string;
  name: string;
  temperature: number;
};

function SuggestionItem(props: SuggestionItemProps) {
  const { date, name, temperature } = props;

  return (
    <Link to={`/mesto/${name}`}>
      <Styled.Wrapper>
        <Styled.Title>{capitalizeString(name)}</Styled.Title>
        <Styled.Date>{formatDate(date)}</Styled.Date>
        <Styled.Temp>{convertKelvinToCelsius(temperature)} °C</Styled.Temp>
      </Styled.Wrapper>
    </Link>
  );
}

export default SuggestionItem;
