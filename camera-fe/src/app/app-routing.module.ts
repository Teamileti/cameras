import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CameraDataComponent} from "./camera-data/camera-data.component";
import {CameraMapComponent} from "./camera-map/camera-map.component";
import { CardViewComponent } from './card-view/card-view.component';
import {SidenavComponent} from "./sidenav/sidenav.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";

const routes: Routes = [
  {path: 'camera-list', component: CameraDataComponent},
  {path: 'camera-map', component: CameraMapComponent},
  {path: 'sidenav', component: SidenavComponent},
  {path: 'card-view', component: CardViewComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [CameraMapComponent, CameraDataComponent, SidenavComponent]
