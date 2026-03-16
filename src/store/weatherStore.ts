import { create } from "zustand";
import type { WeatherResponse } from "../types/weatherTypes";
import { getWeather } from "../api/weatherApi";


interface WeatherState {
    weather: WeatherResponse | null
    loading: boolean
    error: string | null
    fetchWeather: (city: string) => Promise<void>
}

export const useWeatherStore = create<WeatherState>((set) => ({
    weather: null,
    loading: false,
    error: null,

    fetchWeather: async (city) => {
        
        try {

            set({ loading: true, error: null })
            const data = await getWeather(city)

            set({
                weather: data,
                loading: false
            })
        } catch (error) {
            set({
                error: (error as Error).message,
                loading: false
            })
        }
        
    }
}))