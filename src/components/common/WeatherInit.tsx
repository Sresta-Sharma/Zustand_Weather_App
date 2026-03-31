export default function WeatherInit() {
  return (
    <div className="w-full max-w-md text-center mt-6">

      <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/10 shadow-md animate-pulse">

        <p className="text-gray-300 text-sm">
            Fetching your location...
        </p>

      </div>

    </div>
  )
}