import { useEffect } from "react"
import { useWeatherStore } from "./store/weatherStore"

import Search from "./components/Search"
import WeatherCard from "./components/WeatherCard"

function App() {
   
  const fetchWeather = useWeatherStore((state) => state.fetchWeather)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        fetchWeather({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        })
      },
      () => {
        fetchWeather({ city: "Kathmandu" })
      }
    )
  }, [fetchWeather])

  return (

    <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-indigo-700 to-indigo-950 text-white">

      <div className="flex flex-col items-center gap-6 p-4 sm:p-6">

        <div className="w-full flex justify-center sm:justify-end">
          <Search />
        </div>

        <div className="w-full flex justify-center">
          <WeatherCard />
        </div>

      </div>
      
    </div>

  )
}

export default App
