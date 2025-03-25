"use client"
import { useState } from "react";
import StationsList from "@/ui/components/stations/StationsList";
import { use } from 'react'
import type { station } from "@/lib/stations";

function station_search(stations: station[], station_title: string): station[] {
    if (station_title === "") {
        return stations;
    }
    return stations.filter(station => station.title.toLowerCase().includes(station_title.toLowerCase()));
}

export default function Stations({stations}: {stations: Promise<station[]>}) {
    const stations_list = use(stations)
    const [searchString, setSearchString] = useState("");
    return (
      <>
        <h1>Всего станций доступно: {stations_list.length}</h1>
        <h2>Поиск:</h2>
        <input type="text" id="station_search" placeholder="Введите название станции" onChange={(e) => setSearchString(e.target.value)} />
        <h1>{searchString}</h1>
        <StationsList stations={station_search(stations_list, searchString)}/>

      </>
    );
  }
  