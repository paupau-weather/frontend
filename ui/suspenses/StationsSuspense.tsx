export default function StationsSuspense() {
    return (
      <>
        <h1>Всего станций доступно: </h1>
        <h2>Поиск:</h2>
        <input type="text" id="station_search" placeholder="Введите название станции" disabled />
        <h1>Загрузка...</h1>
      </>
    );
  }