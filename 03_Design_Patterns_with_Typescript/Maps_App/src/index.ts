import { CustomMap } from "./CustomMap";
import { User } from "./User";
import { Company } from "./Company";


// Function to initialize the map and add markers
async function initMapAndMarkers() {
  const user = new User();
  const customMap = new CustomMap('map');

  // Load Marker Library
  await customMap.loadMarkerLibrary();

  // Now add markers
  customMap.addUsermarker(user);
}

// Call the initialization function
initMapAndMarkers();
