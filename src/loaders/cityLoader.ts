type CurrentWeather = {
  temp?: number;
  feels_like?: number;
  temp_min?: number;
  temp_max?: number;
  pressure?: number;
  humidity?: number;
  sea_level?: number;
  grnd_level?: number;
};

type Weather = {
  id?: number;
  main?: string;
  description?: string;
  icon?: string;
};

export type WeatherData = {
  main: CurrentWeather;
  weather: Weather[];
};

type CityLoaderProps = {
  params: {
    name?: string;
  };
};

export const cityLoader = async ({ params }: CityLoaderProps) => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${params.name}&appid=${
      import.meta.env.VITE_API_KEY
    }`
  );
  if (res.status === 404) {
    throw new Response("Not Found", { status: 404 });
  }

  const cityWeather = await res.json();

  return {
    main: cityWeather.main,
    weather: cityWeather.weather,
  };
};
