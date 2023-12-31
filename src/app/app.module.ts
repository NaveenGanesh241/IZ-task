import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LobbyComponent } from './component/lobby/lobby.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './component/home/home.component';
import { HeaderComponent } from './component/header/header.component'
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { AdminComponent } from './component/admin/admin.component';
import { DatacontrolComponent } from './component/datacontrol/datacontrol.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DataformComponent } from './component/dataform/dataform.component'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort'
import { MatPaginatorModule } from '@angular/material/paginator';
import { HomeitemsComponent } from './component/homeitems/homeitems.component';
import { ItemComponent } from './component/item/item.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { CommonTableComponent } from './component/common-table/common-table.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AdvertisementComponent } from './component/advertisement/advertisement.component';
import { WishlistComponent } from './component/wishlist/wishlist.component';
import { WishlistItemComponent } from './component/wishlist-item/wishlist-item.component';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  declarations: [
    AppComponent,
    LobbyComponent,
    HomeComponent,
    HeaderComponent,
    AdminComponent,
    DatacontrolComponent,
    DataformComponent,
    HomeitemsComponent,
    ItemComponent,
    CommonTableComponent,
    AdvertisementComponent,
    WishlistComponent,
    WishlistItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    NgxSpinnerModule,
    NgxMatSelectSearchModule,
    MatDividerModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatSelectModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
