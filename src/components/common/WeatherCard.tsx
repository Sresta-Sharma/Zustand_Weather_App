import { useWeatherStore } from "../../store/weatherStore"
import WeatherSkeleton from "./WeatherSkeleton"
import WeatherError from "./WeatherError"
import WeatherInit from "./WeatherInit"
import { Card, CardContent } from "@/components/ui/card"
import { useShallow } from "zustand/react/shallow"

export default function WeatherCard() {

  const { weather, loading, error } = useWeatherStore(
    useShallow((state) => ({
      weather: state.weather,
      loading: state.loading,
      error: state.error,
    }))
  )

  if (loading) {
    return (
      <WeatherSkeleton />
    )
  }

  if (error) {
    return <WeatherError message={error} />
  }
  
  if (!weather){
    return <WeatherInit />
  }
  
  const stats = [
  {
    label: "Rain",
    value: `${weather.rain?.["1h"] ?? 0} mm`,
  },
  {
    label: "Wind",
    value: `${weather.wind.speed} km/h`,
  },
  {
    label: "Humidity",
    value: `${weather.main.humidity}%`,
  },
  ]

  return (

    <div className="text-center w-full max-w-md">

      <h2 className="text-3xl font-extrabold mb-4">
        About Today
      </h2>

      <p className="text-lg text-gray-300 mb-6">
        {weather.name}, {weather.sys.country}
      </p>

      {/* Card */}
    <Card className="bg-white/10 text-gray-200 backdrop-blur-md rounded-3xl border border-white/10 shadow-md transition transform hover:scale-105 active:scale-95 hover:shadow-xl cursor-pointer w-full">

      <CardContent className="p-6 sm:p-8">

        <img
          className="mx-auto w-28 sm:w-40"
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
        />

        <p className="text-gray-300 mb-4">
          {new Date().toLocaleDateString("en-US", {
            weekday: "long",
            day: "numeric",
            month: "long"
          })}
        </p>

        <div className="text-4xl sm:text-6xl font-bold mb-8">
          {Math.round(weather.main.temp)}°
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white/10 p-4 rounded-xl text-center backdrop-blur hover:bg-white/20 transition"
            >
              <p className="text-lg font-semibold">
                {stat.value}
              </p>
              <p className="text-sm text-gray-300">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </CardContent>
    </Card>

  </div>
)
}