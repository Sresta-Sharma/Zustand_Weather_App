import type { WeatherResponse } from "../types/weatherTypes";   
import type { WeatherParams } from "../types/weatherParams"   
import { mapWeatherError } from "../utils/mapWeatherError"  

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY

export async function getWeather(
  params: WeatherParams
): Promise<WeatherResponse> {

  let url = ""

  if (params.city) {
    url = `https://api.openweathermap.org/data/2.5/weather?q=${params.city}&appid=${API_KEY}&units=metric`
  } 
  else if (params.lat !== undefined && params.lon !== undefined) {
    url = `https://api.openweathermap.org/data/2.5/weather?lat=${params.lat}&lon=${params.lon}&appid=${API_KEY}&units=metric`
  } 
  else {
    throw new Error("Invalid parameters")
  }

  try {
    const response = await fetch(url)
    const data = await response.json()

    // Handle API errors
    if (!response.ok || data.cod !== 200) {
      throw new Error(mapWeatherError(data.cod))
    }

    return data

  } catch {
    // Network or unexpected errors
    throw new Error("Unable to fetch weather. Check your internet connection.")
  }
}