import { useState, useEffect } from "react"
import { useWeatherStore } from "../../store/weatherStore"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Search() {
  const [city, setCity] = useState("")
  const [lastSearched, setLastSearched] = useState("")

  const fetchWeather = useWeatherStore((state) => state.fetchWeather)

  const trimmedCity = city.trim()

  // Handle Search
  const searchCity = () => {
    if (trimmedCity.length < 2) return
    if (trimmedCity === lastSearched) return

    fetchWeather({ city: trimmedCity })
    setLastSearched(trimmedCity)
  }

  // Search Debouncing
  useEffect(() => {
    const timer = setTimeout(() => {
      searchCity()
    }, 500)

    return () => clearTimeout(timer)
  }, [trimmedCity, lastSearched])

  return (
    <div className="flex flex-col sm:flex-row gap-2 w-full max-w-md">

      <Input
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") searchCity()
        }}
        className="rounded-3xl bg-white/20 border-white/30 text-white placeholder:text-gray-300 focus-visible:ring-0 focus-visible:ring-offset-0"
      />

      <Button
        type="button"
        onClick={searchCity}
        className="rounded-3xl bg-blue-700 hover:bg-blue-600 w-full sm:w-auto cursor-pointer"
      >
        Search
      </Button>

    </div>
  )
}
