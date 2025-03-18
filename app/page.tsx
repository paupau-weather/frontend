import { requestCurrentWeather } from "@/lib/openMeteo"

export default async function Home() {
  const currentWeather = await requestCurrentWeather();
  return (
    <>
      <h1 className="underline">Сервис PauPau Weather, версия 0.0.4</h1>
      <p>Добро пожаловать в PauPau Weather! Будьте в курсе последних погодных условий благодаря нашим мобильным метеостанциям.</p>
      <p>Точные и актуальные прогнозы погоды помогут вам лучше спланировать свой день.</p>
      <h2 className="underline">Прогноз погоды</h2>
      <p>Текущая температура: {currentWeather.temperature2m} °C</p>
      <p>Текущая влажность: {currentWeather.relativeHumidity2m}%</p>
      <p>Текущее давление: {currentWeather.surfacePressure} кПа</p>
      <p>Время измерения: {currentWeather.time.toLocaleString()}</p>
    </>
  );
}
