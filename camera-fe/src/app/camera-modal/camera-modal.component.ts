import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, NgForm} from "@angular/forms";
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material/dialog";
import {CameraService} from "../service/camera.service";
import {CameraDataComponent} from "../camera-data/camera-data.component";

@Component({
  selector: 'app-camera-modal',
  templateUrl: './camera-modal.component.html',
  styleUrls: ['./camera-modal.component.scss']
})
export class CameraModalComponent implements OnInit {

cameraForm !: FormGroup;
actionBtn: string = "Save";

  constructor(private cameraService: CameraService,
              @Inject(MAT_DIALOG_DATA) public editCameraData: any,
              private dialogRef: MatDialogRef<CameraDataComponent> ) {}

  ngOnInit(): void {
    this.cameraForm = new FormGroup({
      name: new FormControl(''),
      model: new FormControl(''),
      resolution: new FormControl(''),
      ip: new FormControl(''),
      lat: new FormControl(''),
      lon: new FormControl('')
    });

    console.log(this.editCameraData)
    if(this.editCameraData){
      this.actionBtn = "Update"
      this.cameraForm.controls['name'].setValue(this.editCameraData.name);
      this.cameraForm.controls['model'].setValue(this.editCameraData.model);
      this.cameraForm.controls['resolution'].setValue(this.editCameraData.resolution);
      this.cameraForm.controls['ip'].setValue(this.editCameraData.ip);
      this.cameraForm.controls['lat'].setValue(this.editCameraData.lat);
      this.cameraForm.controls['lon'].setValue(this.editCameraData.lon);
    }

  }

  saveCamera(){
    if (!this.editCameraData) {
      this.cameraService.addCamera(this.cameraForm.value)
        .subscribe((response: any) => {
        });
      this.cameraForm.reset();
      this.dialogRef.close('save');
    }
    else
    {
      this.updateCamera()
    }

  }

  updateCamera(){
  this.cameraService.putCamera(this.cameraForm.value, this.editCameraData.id)
    .subscribe({
      next:(result)=> {
        this.cameraForm.reset();
        this.dialogRef.close('update');

      }

    })
  }

}
