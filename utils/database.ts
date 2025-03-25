import { station } from "@/lib/stations";
import { stations_list } from "@/lib/stations";


export async function getStationsNumber(): Promise<number> {
    return stations_list.length;
}

export async function getStations(): Promise<station[]> {
    // await new Promise(f => setTimeout(f, 1000));
    return stations_list;
}