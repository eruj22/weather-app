const LOCAL_STORAGE_NAME = "citiesWeatherData";

export type City = {
  date: string;
  name: string;
  temperature: number;
};

type SavedCities = {
  cities: City[];
};

export const saveCityToLocalStorage = (
  cityName: string,
  temperature: number
): void => {
  const currentDate = new Date().toISOString();
  const name = cityName.toLowerCase();
  const cityData: City = {
    name,
    date: currentDate,
    temperature,
  };
  const storageItems = localStorage.getItem(LOCAL_STORAGE_NAME);
  if (!storageItems) {
    return localStorage.setItem(
      LOCAL_STORAGE_NAME,
      JSON.stringify({
        cities: [cityData],
      })
    );
  }

  const allSavedCities: SavedCities = JSON.parse(storageItems);
  const cityAlreadyExists = allSavedCities.cities.some(
    (city) => city.name === name
  );

  if (cityAlreadyExists) {
    const filteredCities = allSavedCities.cities.filter(
      (city) => city.name !== name
    );
    return localStorage.setItem(
      LOCAL_STORAGE_NAME,
      JSON.stringify({
        cities: [cityData, ...filteredCities],
      })
    );
  }

  if (allSavedCities.cities.length === 5) {
    const filteredCities = allSavedCities.cities.slice(0, 4);
    return localStorage.setItem(
      LOCAL_STORAGE_NAME,
      JSON.stringify({
        cities: [cityData, ...filteredCities],
      })
    );
  }

  return localStorage.setItem(
    LOCAL_STORAGE_NAME,
    JSON.stringify({
      cities: [cityData, ...allSavedCities.cities],
    })
  );
};

export const getCitiesFromLocalStorage = (): City[] | undefined => {
  const storageItems = localStorage.getItem(LOCAL_STORAGE_NAME);
  if (!storageItems) {
    return [];
  }

  const allSavedCities: SavedCities = JSON.parse(storageItems);

  return allSavedCities.cities;
};
