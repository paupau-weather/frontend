import Link from "next/link";
import { notFound } from 'next/navigation';
import { stations_list } from "@/lib/stations_list";


export default async function Station( {params}: {params: Promise<{station_id: number}>}) {
    let {station_id} = await params;
    station_id = Number(station_id)
    const station = stations_list.find(station => station.station_id === station_id)
    console.log(station_id, station);
    if (!station) {
        notFound();
    }
    return (
      <>
        <h3>{station.title} [{station.station_id}]</h3>
        <h4>Status: {station.status}</h4>
        <p>{station.description}</p>

        <div className="w-max">
            <hr/>
            <p>Temperature: {station.current_temp}</p>
            <p>Humidity: {station.current_humidity}</p>
            <p>Pressure: {station.current_pressure}</p>
            <p>Measurement Time: {station.measurement_time}</p>
            <hr/>
        </div>
        <Link href='/stations'>Вернуться к списку станций</Link>
      </>
    );
  }
  


// export default async function Page({
//     params,
//   }: {
//     params: Promise<{ slug: string }>
//   }) {
//     const { slug } = await params
//     return <div>My Post: {slug}</div>
//   }