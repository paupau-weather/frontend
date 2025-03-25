import CurrentWeather from "@/ui/components/CurrentWeather";
import CurrentWeatherSuspense from "@/ui/suspenses/CurrentWeatherSuspense";
import { Suspense } from 'react'

export default async function Home() {
  return (
    <>
      <h1 className="underline">Сервис PauPau Weather, версия 0.0.5</h1>
      <p>Добро пожаловать в PauPau Weather! Будьте в курсе последних погодных условий благодаря нашим мобильным метеостанциям.</p>
      <p>Точные и актуальные прогнозы погоды помогут вам лучше спланировать свой день.</p>
      <Suspense fallback={<CurrentWeatherSuspense />}>
        <CurrentWeather />
      </Suspense>
    </>
  );
}
