interface Props {
  message: string
}

export default function WeatherError({ message }: Props) {
  return (
    <div className="mt-10 w-full max-w-md text-center">

      <div className="bg-red-500/10 border border-red-400/30 rounded-2xl p-4 backdrop-blur">

        <p className="text-red-300 font-semibold mb-2">
          ⚠️ Error
        </p>

        <p className="text-red-200 text-sm">
          {message}
        </p>

      </div>

    </div>
  )
}