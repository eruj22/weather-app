import Search from "../../components/search";
import SuggestionItem from "../../components/suggestionItem";
import { getCitiesFromLocalStorage } from "../../utils/localStorageHelpers";
import Styled from "./Home.styled";

function Home() {
  const savedCities = getCitiesFromLocalStorage();

  return (
    <Styled.Main>
      <Styled.Title>Vreme kjerkoli in kadarkoli</Styled.Title>
      <Search />
      <Styled.SuggestionsTitle>Nedavno iskano</Styled.SuggestionsTitle>
      <Styled.SuggestionsGrid>
        {savedCities?.map((city) => {
          return <SuggestionItem key={city.name} {...city} />;
        })}
      </Styled.SuggestionsGrid>
      {savedCities?.length === 0 && (
        <Styled.SuggestionsText>Brez rezultatov</Styled.SuggestionsText>
      )}
    </Styled.Main>
  );
}

export default Home;
