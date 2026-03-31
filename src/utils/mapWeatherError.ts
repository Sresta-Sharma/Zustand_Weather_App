export function mapWeatherError(code: number | string): string {
  const errorCode = Number(code)

  switch (errorCode) {
    case 404:
      return "City not found. Please check the spelling."

    case 401:
      return "Invalid API key. Please contact support."

    default:
      return "Something went wrong. Please try again."
  }
}
