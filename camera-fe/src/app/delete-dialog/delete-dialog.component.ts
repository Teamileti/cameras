import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss']
})
//export class DeleteDialogComponent implements OnInit {
  export class DeleteDialogComponent{
  message: string = "Are you sure you want to delete camera?"

  constructor(@Inject(MAT_DIALOG_DATA) private data: any, private dialogRef: MatDialogRef<DeleteDialogComponent>) { 
    if(data){
      this.message = data.message || this.message;
  }
  }
  ngOnInit(): void {
  }

}
