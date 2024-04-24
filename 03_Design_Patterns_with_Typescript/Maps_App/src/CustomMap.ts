/// <reference types="@types/google.maps" />  // <--Note: directive to reference the typefile

export interface Mappable {
  location: {
    lat: number;
    lng: Number;
  };
  markerContent(): string;
  color: string;
}
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

  addMarker(mappable: Mappable): void {
    if (!this.MarkerElement) {
      console.log('Marker library is not loaded yet.');
      return;
    }

    const marker = new this.MarkerElement({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    });

    marker.addListener('click', ()=> {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent()
      });
      infoWindow.open(this.googleMap, marker)
    })
  }


}
