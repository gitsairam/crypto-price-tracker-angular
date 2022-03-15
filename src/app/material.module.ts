import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NgModule } from '@angular/core';

@NgModule({
exports:[
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatCardModule,
    MatInputModule,
    MatToolbarModule
],


})
export class MaterialModule{}