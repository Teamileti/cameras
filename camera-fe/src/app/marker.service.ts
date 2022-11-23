import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
// @ts-ignore
import * as L from 'leaflet';
import {CameraService} from "./service/camera.service";
import { MarkerPopupService } from './marker-popup.service';

@Injectable({
  providedIn: 'root'
})
export class MarkerService {
  capitals: string = '/assets/data/capitals.geojson';


  constructor(private http: HttpClient, private cameraService: CameraService, private markerPopupService: MarkerPopupService) { }


  // makeCapitalMarkers(map: L.map): void {
  //   this.http.get(this.capitals).subscribe((res: any) => {
  //     console.log("aasadsad", res)
  //     for (const c of res.features) {
  //       const lon = c.geometry.coordinates[0];
  //       const lat = c.geometry.coordinates[1];
  //       const marker = L.marker([lat, lon]);
  
  //       marker.addTo(map);
  //     }
  //   });
  // }

  makeCapitalMarkers(map: L.map): void {
    this.cameraService.get().subscribe((res: any) => {
      console.log("aasadsad", res)

      for (const c of res) {
        const lon = c.lon;
        const lat = c.lat;
        console.log("sadsadasdsadsad", lon, lat)
        const marker = L.marker([ lon, lat]);

        marker.bindPopup(this.markerPopupService.displayDetailPopup(c));

        marker.addTo(map);
      }
    });
  }
}
