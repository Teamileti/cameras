import { Component, OnInit } from '@angular/core';
import { MatCard } from '@angular/material/card';
import {MatTableDataSource} from '@angular/material/table';
import { Observable } from 'rxjs';
import { CameraService } from '../service/camera.service';
import { Camera } from '../model/Camera';
import {CameraModalComponent} from "../camera-modal/camera-modal.component";
import {MatDialog} from "@angular/material/dialog";
import {DeleteDialogComponent} from "../delete-dialog/delete-dialog.component";

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss']
})
export class CardViewComponent implements OnInit {
  gridColumns = 3;
  cameras: Observable<Camera[]> | any;


  constructor(public cameraService: CameraService, public dialog: MatDialog) { }

  ngOnInit(): void {
    // this.cameraService.get().subscribe(camera => {
    //   this.cameras = camera;
    //  });
    this.getDataCamera();
  }

  // getDataCamera() {
  //   this.cameraService.get().subscribe((response: any) => {
  //     this.dataSource = new MatCard(response)
  //   })
  // }

  editCamera(element: any) {
    this.dialog.open(CameraModalComponent,{
      width: '50%',
      data: element
    }).afterClosed().subscribe(value => {
      if(value === 'update'){
        this.getDataCamera()
      }
    })

  }
getDataCamera() {
  this.cameraService.get().subscribe(camera => {
    this.cameras = camera;
  });
    }

  removeRow(id: string) {
    this.dialog
      .open(DeleteDialogComponent)
      .afterClosed()
      .subscribe((confirm: any) => {
        if (confirm) {
          this.cameraService.deleteCamera(id).subscribe(() => {
            this.cameras= this.cameras.filter(
              (c: Camera) => c.id != id);
          });
        }
        this.getDataCamera()
      });

  }
}
