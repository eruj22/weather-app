import { getWeatherIcon } from "../../utils/getIcon";

type WeatherIconProps = {
  id: number;
};

function WeatherIcon({ id }: WeatherIconProps) {
  return <img src={getWeatherIcon(id)} alt="" />;
}

export default WeatherIcon;
