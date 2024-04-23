/// <reference types="@types/google.maps" />  // <--Note: directive to reference the typefile

import { User } from "./User";
import { Company } from "./Company";


export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(
      document.getElementById(divId) as HTMLElement,
      {
        zoom: 1,
        center: {
          lat: 0,
          lng: 0,
        },
      }
    );
  }

  addUsermarker(user: User): void {

    new google.maps.marker.AdvancedMarkerElement({
      map: this.googleMap,
      position:{
        lat: user.location.lat,
        lng: user.location.lng
      }
    })
  }

  addCompanyMarker(company: Company): void{

  }
}
