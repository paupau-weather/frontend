import Link from "next/link";
import { stations_list } from "@/lib/stations_list";

export default function Stations() {
    return (
      <>
        <h1>Всего станций доступно: {stations_list.length}</h1>
        <h1>Доступные станции:</h1>
        <ul>
            {
                stations_list.map(station => {
                    return <li key={station.station_id}><Link href={`/stations/${station.station_id}`}>{station.title}</Link></li>
                }
)
            }
        </ul>
      </>
    );
  }
  