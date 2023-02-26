import { format, parseISO } from "date-fns";

export const capitalizeString = (string?: string): string => {
  if (!string) {
    return "";
  }

  const splitName = string.split(" ");
  if (splitName.length === 1) {
    return string[0].toUpperCase() + string.slice(1);
  }

  return splitName.map((str) => str[0].toUpperCase() + str.slice(1)).join(" ");
};

export const convertKelvinToCelsius = (temp?: number): number | string => {
  if (!temp) {
    return "/";
  }

  return Math.round(temp - 273.15);
};

export const formatDate = (ISOString: string): string => {
  const date = format(parseISO(ISOString), "dd.MM");
  const time = format(parseISO(ISOString), "HH:mm");

  return `${date} ob ${time}`;
};
