import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { CoinDetailsComponent } from './coin-details/coin-details.component';
import { CoinListComponent } from './coin-list/coin-list.component';
import { Route, RouterModule } from '@angular/router';

const routes:Route[]=[{path:"",component:CoinListComponent},
{path:"coin/:id",component:CoinDetailsComponent}];

@NgModule({
  declarations: [
    AppComponent,
    CoinDetailsComponent,
    CoinListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
