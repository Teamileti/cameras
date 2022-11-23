import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Camera} from "../model/Camera";
import * as http from "http";

@Injectable({
  providedIn: 'root'
})
export class CameraService {
 url ='http://localhost:8080/api/'


  constructor(public http: HttpClient) {}

  public get(): Observable<any> {
    return this.http.get(this.url + 'getCamera');
  }

  deleteCamera(id: string): Observable<Camera>{
    return this.http.delete<any>(`${this.url}` + 'deleteCameraById?cameraId=' + id)
  }

  addCamera(camera: Camera): Observable<any>{
   return this.http.post<Camera>(`${this.url}` + 'addCamera', camera)
  }

  putCamera(camera: Camera, id: string): Observable<any>{
    return this.http.put<Camera>(`${this.url}` + 'updateCameras?cameraId=' + id , camera)
  }

  deleteCamerasById(ids: string[]): Observable<any>{
   let params = new HttpParams();
   ids.forEach(id => params = params.append('ids', id));
   return this.http.delete(`${this.url}deleteCameras`, {
     params
   } )
  }


  //
  // editCamera(camera: Camera): Observable<Camera>{
  //   return this.http.patch<Camera>(`${this.editurl}/${camera.id}`, camera);
  // }


}
