import Sunny from "../assets/sunny.svg";
import Cloudy from "../assets/cloudy.svg";
import Rain from "../assets/rain.svg";
import Thunderstorm from "../assets/thunderstorm.svg";
import Snow from "../assets/snow.svg";
import Mist from "../assets/mist.svg";

export const getWeatherIcon = (id: number) => {
  if (id === 800) {
    return Sunny;
  }

  const firstIdNumber = Number(String(id)[0]);
  switch (firstIdNumber) {
    case 2:
      return Thunderstorm;
    case 3:
      return Rain;
    case 5:
      return Rain;
    case 6:
      return Snow;
    case 7:
      return Mist;
    case 8:
      return Cloudy;
    default:
      throw new Error("Unknown icon id");
  }
};
