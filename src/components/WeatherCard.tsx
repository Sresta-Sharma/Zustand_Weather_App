import { useWeatherStore } from "../store/weatherStore"

export default function WeatherCard() {

  const weather = useWeatherStore((state) => state.weather)
  const loading = useWeatherStore((state) => state.loading)
  const error = useWeatherStore((state) => state.error)

  if (!weather) return null
  
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

  if (loading) {
    return (
      <div className="mt-6 text-center text-mauve-700">
        Loading weather...
      </div>
    )
  }

  if (error) {
    return (
      <div className="mt-16 text-center text-red-500">
        {error}
      </div>
    )
  }

  return (

    <div className="text-center">

      <h2 className="text-3xl font-extrabold mb-4">
        About Today
      </h2>

      <p className="text-lg text-gray-300 mb-6">
        {weather.name}, {weather.sys.country}
      </p>

      {/* Card */}
    <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-md border border-white/10 transition transform hover:scale-105 hover:shadow-xl cursor-pointer">

      <img
        className="mx-auto w-40"
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
      />

      <p className="text-gray-300 mb-4">
        {new Date().toLocaleDateString("en-US", {
          weekday: "long",
          day: "numeric",
          month: "long"
        })}
      </p>

      <div className="text-6xl font-bold mb-8">
        {Math.round(weather.main.temp)}°
      </div>

      <div className="grid grid-cols-3 gap-4">
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

    </div>

  </div>
)
}