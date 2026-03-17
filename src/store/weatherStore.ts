import { create } from "zustand"
import type { WeatherResponse } from "../types/weatherTypes"
import type { WeatherParams } from "../types/weatherParams"
import { getWeather } from "../api/weatherApi"

interface WeatherState {
  weather: WeatherResponse | null
  loading: boolean
  error: string | null
  fetchWeather: (params: WeatherParams) => Promise<void>
}

export const useWeatherStore = create<WeatherState>((set) => ({
  weather: null,
  loading: false,
  error: null,

  fetchWeather: async (params) => {
    try {
      set({ loading: true, error: null })

      const data = await getWeather(params)

      set({
        weather: data,
        loading: false,
      })

    } catch (error) {
      set({
        error: (error as Error).message,
        loading: false,
      })
    }
  }
}))