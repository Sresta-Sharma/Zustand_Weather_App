import { useState } from "react"
import { useWeatherStore } from "../store/weatherStore"

export default function Search() {

  const [city, setCity] = useState("")
  const fetchWeather = useWeatherStore((state) => state.fetchWeather)

  const handleSearch = () => {
    if (!city.trim()) return
    fetchWeather(city)
  }

  return (

    <div className="flex gap-2">

        <input
          className="rounded-3xl px-4 py-2 w-64 bg-white/20 backdrop-blur border border-white/30 placeholder-gray-300 text-white focus:outline-none"
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch()
          }}
        />

        <button
          onClick={handleSearch}
          className="bg-blue-700 text-white px-4 py-2 rounded-3xl hover:bg-blue-600 transition cursor-pointer"
        >
          Search
        </button>

    </div>
  )
}