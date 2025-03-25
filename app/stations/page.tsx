import { getStations } from "@/utils/backend/database";
import Stations from "@/ui/components/Stations";


export default async function StationsPage() {
    const stations = getStations();
    return (
      <Stations stations={stations}/>
    );
  }
  