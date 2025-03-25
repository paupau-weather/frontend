import { requestCurrentWeather } from "@/utils/openMeteo"

export default async function CurrentWeather() {
    const currentWeather = await requestCurrentWeather();
    return (
            <div>
                <h2 className="underline">Прогноз погоды</h2>
                <p>Текущая температура: {currentWeather.temperature2m} °C</p>
                <p>Текущая влажность: {currentWeather.relativeHumidity2m}%</p>
                <p>Текущее давление: {currentWeather.surfacePressure} кПа</p>
                <p>Время измерения: {currentWeather.time.toTimeString()}</p>
            </div>
    )
}