import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { CoinDetailsComponent } from './coin-details/coin-details.component';
import { CoinListComponent } from './coin-list/coin-list.component';
import { Route, RouterModule } from '@angular/router';
import { NgChartsModule } from 'ng2-charts';
import { MaterialModule } from './material.module';

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
    FormsModule,
    RouterModule.forRoot(routes),
    NgChartsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
