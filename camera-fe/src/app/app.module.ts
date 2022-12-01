import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { CameraDataComponent } from './camera-data/camera-data.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldControl, MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import { CameraModalComponent } from './camera-modal/camera-modal.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SidenavComponent } from './sidenav/sidenav.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatToolbarModule} from "@angular/material/toolbar";
import { CameraMapComponent } from './camera-map/camera-map.component';
import {MarkerService} from "./marker.service";
import { MarkerPopupService } from './marker-popup.service';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { CardViewComponent } from './card-view/card-view.component'
import { MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import { MatSliderModule } from '@angular/material/slider';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {InterceptorService} from "./service/interceptor.service";



// @ts-ignore
// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    CameraDataComponent,
    DeleteDialogComponent,
    CameraModalComponent,
    SidenavComponent,
    CameraMapComponent,
    routingComponents,
    CardViewComponent,
    LoginComponent,
    RegisterComponent,

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatTableModule,
        MatPaginatorModule,
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        MatFormFieldModule,
        MatDialogModule,
        MatDialogModule,
        ReactiveFormsModule,
        MatSidenavModule,
        MatListModule,
        MatToolbarModule,
        MatCheckboxModule,
        MatCardModule,
        MatMenuModule,
        MatSliderModule,
        FormsModule,


    ],
  providers: [
    MarkerService,
    MarkerPopupService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
