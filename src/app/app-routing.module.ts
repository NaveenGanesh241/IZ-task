import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LobbyComponent } from './component/lobby/lobby.component';
import { HomeComponent } from './component/home/home.component';
import { AdminComponent } from './component/admin/admin.component';
import { DatacontrolComponent } from './component/datacontrol/datacontrol.component';

const routes: Routes = [
  { path: '', component: LobbyComponent },
  { path: 'home/:login', component: HomeComponent, data: { breadcrumb: 'Home' } },
  { path: 'admin', component: AdminComponent, data: { breadcrumb: 'Admin' } },
  { path: 'admin/data', component: DatacontrolComponent, data: { breadcrumb: 'Table' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
