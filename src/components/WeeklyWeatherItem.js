import React from "react";
import ImageComponent from "./ImageComponent";
import { convertEpochToDateTime } from "../../utils/helper_functions";

const WeeklyWeatherItem = ({ dayData, timezone_offset }) => {
  const day = convertEpochToDateTime(dayData?.dt, timezone_offset).dayOfWeek;
  const temperature = dayData?.temp?.day;
  const description = dayData?.weather[0]?.description;
  const icon = dayData?.weather[0]?.icon;
  const humidity = dayData?.humidity;
  const pressure = dayData?.pressure;
  const windSpeed = dayData?.wind_speed;
  const sunrise = dayData?.sunrise;
  const sunset = dayData?.sunset;
  const maxTemp = dayData?.temp?.max;
  const minTemp = dayData?.temp?.min;

  const weatherToColor = {
    "01d": "bg-yellow-300", // Clear sky (day)
    "01n": "bg-blue-900 text-white", // Clear sky (night)
    "02d": "bg-yellow-100", // Few clouds (day)
    "02n": "bg-blue-800", // Few clouds (night)
    "03d": "bg-gray-300", // Scattered clouds (day)
    "03n": "bg-gray-800", // Scattered clouds (night)
    "04d": "bg-gray-400", // Broken clouds (day)
    "04n": "bg-gray-900", // Broken clouds (night)
    "09d": "bg-blue-600", // Showers (day)
    "09n": "bg-blue-900", // Showers (night)
    "10d": "bg-blue-600", // Rain (day)
    "10n": "bg-blue-900", // Rain (night)
    "11d": "bg-gray-600", // Thunderstorm (day)
    "11n": "bg-gray-900", // Thunderstorm (night)
    "13d": "bg-yellow-100", // Snow (day)
    "13n": "bg-blue-700", // Snow (night)
    "50d": "bg-gray-100", // Mist (day)
    "50n": "bg-gray-700", // Mist (night)
  };

  const weatherToTextColor = {
    "01d": "text-black", // Clear sky (day)
    "01n": "text-white", // Clear sky (night)
    "02d": "text-black", // Few clouds (day)
    "02n": "text-white", // Few clouds (night)
    "03d": "text-black", // Scattered clouds (day)
    "03n": "text-white", // Scattered clouds (night)
    "04d": "text-black", // Broken clouds (day)
    "04n": "text-white", // Broken clouds (night)
    "09d": "text-white", // Showers (day)
    "09n": "text-white", // Showers (night)
    "10d": "text-white", // Rain (day)
    "10n": "text-white", // Rain (night)
    "11d": "text-white", // Thunderstorm (day)
    "11n": "text-white", // Thunderstorm (night)
    "13d": "text-black", // Snow (day)
    "13n": "text-white", // Snow (night)
    "50d": "text-black", // Mist (day)
    "50n": "text-white", // Mist (night)
  };

  // Get the background color based on the weather icon
  const backgroundColor = weatherToColor[icon] || "bg-gray-200";
  const textColor = weatherToTextColor[icon] || "text-white";

  return (
    <div
      className={`${backgroundColor} ${textColor} p-4 rounded-lg shadow-md font-bold mx-2`}
    >
      <h3 className="text-lg font-semibold mb-2">{day}</h3>
      <ImageComponent icon={icon} description={description} />
      <p className="text-lg sm:text-xl md:text-2xl font-semibold">
        {temperature}°F
      </p>
      <p className="text-sm sm:text-base md:text-lg">{description}</p>
      <div className="mt-3">
        <p className="text-sm sm:text-base md:text-lg">
          Sunrise: {convertEpochToDateTime(sunrise, timezone_offset).time}
        </p>
        <p className="text-sm sm:text-base md:text-lg">
          Sunset: {convertEpochToDateTime(sunset, timezone_offset).time}
        </p>
        <p className="text-sm sm:text-base md:text-lg">Max Temp: {maxTemp}°F</p>
        <p className="text-sm sm:text-base md:text-lg">Min Temp: {minTemp}°F</p>
        <p className="text-sm sm:text-base md:text-lg">Humidity: {humidity}%</p>
        <p className="text-sm sm:text-base md:text-lg">
          Pressure: {pressure} hPa
        </p>
        <p className="text-sm sm:text-base md:text-lg">
          Wind Speed: {windSpeed} m/s
        </p>
      </div>
    </div>
  );
};

export default WeeklyWeatherItem;
