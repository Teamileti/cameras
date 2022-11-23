
import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {CameraService} from "../service/camera.service";
import {Camera} from "../model/Camera";
import {DeleteDialogComponent} from "../delete-dialog/delete-dialog.component";
import { MatDialog } from '@angular/material/dialog';
import {CameraModalComponent} from "../camera-modal/camera-modal.component";
import {DataSource, SelectionModel} from '@angular/cdk/collections';
import { MatCheckbox } from '@angular/material/checkbox';

@Component({
  selector: 'app-camera-data',
  templateUrl: './camera-data.component.html',
  styleUrls: ['./camera-data.component.scss']
})

export class CameraDataComponent implements OnInit, AfterViewInit {
  camera: any[] = [];
  displayedColumns: string[] = ['select', 'name', 'model', 'resolution', 'ip', 'lat', 'lon', 'actions'];
  dataSource = new MatTableDataSource<any>();
  selection = new SelectionModel<Camera>(true, []);

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

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    if (this.isAllSelected()){
      this.selection.clear();
    }
    else {
      this.dataSource.data.forEach(row => this.selection.select(row));
      console.log(this.selection.selected)
    }
  }

  removeSelectedRows() {
    this.dialog
      .open(DeleteDialogComponent, {
        data:{
            message: 'Are u sure you want to delete all the selected rows??'
        }})
      .afterClosed().subscribe(
        (confirmed: any) => {
        if (confirmed) {
          //console.log(this.selection.selected)
          const ids = this.selection.selected.map((camera: Camera) => camera.id)
          console.log(ids)
          this.cameraService.deleteCamerasById(ids).subscribe( () =>
            {
              this.getDataCamera();
              this.selection = new SelectionModel<Camera>(true, []);
            }
          )
   //  this.selection.selected.forEach(item => {
   //   let index: number = this.dataSource.data.findIndex(d => d === item);
   //   console.log(this.dataSource.data.findIndex(d => d === item));
   //   //console.log(item);
   //   this.dataSource.data.splice(index,1);
   //
   //   this.dataSource = new MatTableDataSource<Camera>(this.dataSource.data);
   // });
   // this.selection = new SelectionModel<Camera>(true, []);
 }
}
      )
}

}






