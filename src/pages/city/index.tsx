import { useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";

import { WeatherData } from "../../loaders/cityLoader";
import { capitalizeString, convertKelvinToCelsius } from "../../utils/helpers";
import { saveCityToLocalStorage } from "../../utils/localStorageHelpers";
import Styled from "./City.styled";
import WeatherIcon from "./WeatherIcon";

export default function City() {
  const {
    main: { feels_like, humidity, temp, temp_max, temp_min },
    weather,
  } = useLoaderData() as WeatherData;
  const { name } = useParams();

  useEffect(() => {
    if (name && temp) {
      saveCityToLocalStorage(name, temp);
    }
  }, []);

  return (
    <Styled.Main>
      <Styled.Title>{capitalizeString(name)}</Styled.Title>
      <Styled.TempAndIconWrapper>
        <Styled.IconWrapper>
          {weather[0].id && <WeatherIcon id={weather[0].id} />}
        </Styled.IconWrapper>
        <Styled.TempWrapper>
          <div>
            <Styled.Temp>{convertKelvinToCelsius(temp)}°</Styled.Temp>
            <Styled.TempSmall>C</Styled.TempSmall>
          </div>
          <Styled.TempFeeling>
            Občutek {convertKelvinToCelsius(feels_like)}°C
          </Styled.TempFeeling>
        </Styled.TempWrapper>
      </Styled.TempAndIconWrapper>
      <Styled.OtherFlex>
        <Styled.OtherText>Dnevne temperature</Styled.OtherText>
        <Styled.OtherText>
          {convertKelvinToCelsius(temp_max)}° /{" "}
          {convertKelvinToCelsius(temp_min)}° C
        </Styled.OtherText>
      </Styled.OtherFlex>
      <Styled.OtherFlex>
        <Styled.OtherText>Vlažnost</Styled.OtherText>
        <Styled.OtherText>{humidity}%</Styled.OtherText>
      </Styled.OtherFlex>
    </Styled.Main>
  );
}
