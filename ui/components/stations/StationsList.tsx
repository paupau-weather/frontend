import { station } from "@/lib/stations";
import Link from "next/link";


export default function StationsList({stations} : {stations: station[]}) {
    return (
        <>
            <h1>Доступные станции:</h1>
            <ul>
                {
                    stations.map(station => {
                        return <li key={station.station_id}><Link href={`/stations/${station.station_id}`}>- {station.title} [{station.station_id}]</Link></li>
                    })
                }
            </ul>
        </>
    )
}