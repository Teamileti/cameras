import { Component, OnInit } from '@angular/core';
import { MatCard } from '@angular/material/card';
import {MatTableDataSource} from '@angular/material/table';
import { Observable } from 'rxjs';
import { CameraService } from '../service/camera.service';
import { Camera } from '../model/Camera';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss']
})
export class CardViewComponent implements OnInit {
  gridColumns = 3;
  cameras: Observable<Camera[]> | any;
  

  constructor(public cameraService: CameraService) { }

  ngOnInit(): void {
    this.cameraService.get().subscribe(camera => {
      this.cameras = camera;
     });
    // this.getDataCamera();
  }

  // getDataCamera() {
  //   this.cameraService.get().subscribe((response: any) => {
  //     this.dataSource = new MatCard(response)
  //   })
  // }

}
