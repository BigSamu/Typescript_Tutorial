import { CustomMap } from "./CustomMap";
import { User } from "./User";
import { Company } from "./Company";


// Function to initialize the map and add markers
async function initMapAndMarkers() {
  const user = new User();
  const company = new Company();
  const customMap = new CustomMap('map');

  // Load Marker Library
  await customMap.loadMarkerLibrary();

  // Now add markers
  customMap.addMarker(user);
  customMap.addMarker(company);
}

initMapAndMarkers()
