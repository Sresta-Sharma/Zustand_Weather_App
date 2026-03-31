export default function WeatherError({ message }: { message: string }) {
  return (
    <div className="w-full max-w-md text-center mt-6">

      <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-red-400/30 shadow-md">

        <p className="text-red-300 text-lg font-semibold mb-2">
          ⚠️ Error
        </p>

        <p className="text-gray-300 text-sm">
          {message}
        </p>

      </div>

    </div>
  )
}