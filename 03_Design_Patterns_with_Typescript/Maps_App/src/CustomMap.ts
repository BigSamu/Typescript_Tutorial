/// <reference types="@types/google.maps" />  // <--Note: directive to reference the typefile
import { User } from "./User";
import { Company } from "./Company";

export class CustomMap {
  private googleMap: google.maps.Map;
  private MarkerElement?: any;  // Use any or a specific type you expect

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId) as HTMLElement, {
      zoom: 1,
      center: { lat: 0, lng: 0 },
      mapId: divId
    });
  }

  async loadMarkerLibrary() {
    try {
      const { AdvancedMarkerElement } = (await google.maps.importLibrary('marker')) as google.maps.MarkerLibrary;  // Use any or define a more specific type
      this.MarkerElement = AdvancedMarkerElement;
    } catch (error) {
      console.error("Failed to load the marker library:", error);
    }
  }

  addUsermarker(user: User): void {
    if (!this.MarkerElement) {
      console.log('Marker library is not loaded yet.');
      return;
    }

    new this.MarkerElement({
      map: this.googleMap,
      position: {
        lat: user.location.lat,
        lng: user.location.lng
      }
    });
  }

  addCompanyMarker(company: Company): void {
    // Similarly ensure MarkerElement is loaded
  }
}
