import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcasaComponent } from "./acasa/acasa.component";
import {ServiciiComponent} from "./servicii/servicii.component";
import {DespreAsociatieComponent} from "./despre-asociatie/despre-asociatie.component";
import {ContactComponent} from "./contact/contact.component";



const routes: Routes = [
  {path: 'acasa', component: AcasaComponent, pathMatch: 'full'},
  {path: 'servicii', component:ServiciiComponent},
  {path: 'despreasociatie', component: DespreAsociatieComponent},
  {path: 'contact',  component: ContactComponent},
  {path: '', redirectTo: 'acasa', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
