"use client"
import { useState } from "react";

import { stations_list, station } from "@/lib/stations";
import StationsList from "@/ui/components/stations/StationsList";

function station_search(station_title: string): station[] {
    if (station_title === "") {
        return stations_list;
    }

    return stations_list.filter(station => station.title.toLowerCase().includes(station_title.toLowerCase()));
}

export default function Stations() {

    const [searchString, setsearchString] = useState("");
    return (
      <>
        <h1>Всего станций доступно: {stations_list.length}</h1>
        <h2>Поиск:</h2>
        <input type="text" id="station_search" placeholder="Введите название станции" onChange={(e) => setsearchString(e.target.value)} />
        <h1>{searchString}</h1>
        <StationsList stations={station_search(searchString)}/>

      </>
    );
  }
  