import { getStations } from "@/utils/database";
import Stations from "@/ui/components/Stations";
import { Suspense } from "react";
import StationsSuspense from "@/ui/suspenses/StationsSuspense";


export default async function StationsPage() {
    const stations = getStations();
    return (
      <Suspense fallback={<StationsSuspense />}>
        <Stations stations={stations}/>
      </Suspense>
    );
  }
  