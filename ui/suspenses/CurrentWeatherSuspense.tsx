export default async function CurrentWeatherSuspense() {
    return (
        <div>
            <h2 className="underline">Прогноз погоды</h2>
            <p>Текущая температура: Загрузка...</p>
            <p>Текущая влажность: Загрузка...</p>
            <p>Текущее давление: Загрузка...</p>
            <p>Время измерения: Загрузка...</p>
        </div>
    )
}