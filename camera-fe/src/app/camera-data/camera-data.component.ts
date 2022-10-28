
import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {CameraService} from "../service/camera.service";
import {Camera} from "../model/Camera";
import {DeleteDialogComponent} from "../delete-dialog/delete-dialog.component";
import { MatDialog } from '@angular/material/dialog';
import {CameraModalComponent} from "../camera-modal/camera-modal.component";

@Component({
  selector: 'app-camera-data',
  templateUrl: './camera-data.component.html',
  styleUrls: ['./camera-data.component.scss']
})

export class CameraDataComponent implements OnInit, AfterViewInit {
  camera: any[] = [];
  displayedColumns: string[] = ['name', 'model', 'resolution', 'ip', 'actions'];
  dataSource = new MatTableDataSource<any>();

  constructor(public dialog: MatDialog, public cameraService: CameraService) {
  }


  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  ngOnInit(): void {
    this.getDataCamera();
  }

  ngAfterViewInit() {
    // @ts-ignore
    this.dataSource.paginator = this.paginator ?? undefined;
  }

  getDataCamera() {
    this.cameraService.get().subscribe((response: any) => {
      this.dataSource = new MatTableDataSource(response)
    })
  }


  removeRow(id: string) {
    this.dialog
      .open(DeleteDialogComponent)
      .afterClosed()
      .subscribe((confirm: any) => {
        if (confirm) {
          this.cameraService.deleteCamera(id).subscribe(() => {
            this.dataSource.data = this.dataSource.data.filter(
              (c: Camera) => c.id != id);
          });
        }
        this.getDataCamera()
      });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  addRow(): void {

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CameraModalComponent, {
      width: '600px',
    }).afterClosed().subscribe(value => {
    if(value === 'save') {
    this.getDataCamera()
    }
      })
  }

  editCamera(row: any) {
    this.dialog.open(CameraModalComponent,{
      width: '50%',
      data: row
    }).afterClosed().subscribe(value => {
      if(value === 'update'){
        this.getDataCamera()
      }
    })
  }
}






