import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LobbyComponent } from './component/lobby/lobby.component';
import { HomeComponent } from './component/home/home.component';
import { AdminComponent } from './component/admin/admin.component';
import { DatacontrolComponent } from './component/datacontrol/datacontrol.component';
import { WishlistComponent } from './component/wishlist/wishlist.component';

const routes: Routes = [
  { path: '', component: LobbyComponent },
  { path: 'home', component: HomeComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'admin/data', component: DatacontrolComponent},
  { path: 'product/:nav', component: WishlistComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
