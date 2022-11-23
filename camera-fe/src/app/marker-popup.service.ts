import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MarkerPopupService {

  constructor() { }

  displayDetailPopup(data: any): string {
    return `` +
    `<div>Camera: ${ data.name }</div>` +
    `<div>Model: ${ data.model }</div>` +
    `<div>Latitude: ${ data.lat }</div>`+
    `<div>Longitude: ${ data.lon }</div>`
  }
}
