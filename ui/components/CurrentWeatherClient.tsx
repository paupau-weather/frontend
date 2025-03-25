'use client'
import { requestCurrentWeather } from "@/utils/openMeteo"
import { useEffect, useState } from "react"

export default function CurrentWeather() {
    const [currentWeather, setCurrentWeather] = useState({
        temperature2m: 0,
        relativeHumidity2m: 0,
        surfacePressure: 0,
        time: new Date()
    });
    useEffect(() => {
        async function fetchData() {
            const res = await requestCurrentWeather();
            setCurrentWeather(res);
        }
        fetchData();
    }, []);
    return (
        <div>
            <h2 className="underline">Прогноз погоды</h2>
            <p>Текущая температура: {currentWeather.temperature2m} °C</p>
            <p>Текущая влажность: {currentWeather.relativeHumidity2m}%</p>
            <p>Текущее давление: {currentWeather.surfacePressure} кПа</p>
            <p>Время измерения: {currentWeather.time.toLocaleString()}</p>
        </div>
    )
}