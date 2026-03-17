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

      <div className="flex justify-end p-6">
      <Search />
      </div>
      
      <div className="flex justify-center items-center">
      <WeatherCard />
      </div>
      
    </div>

  )
}

export default App
