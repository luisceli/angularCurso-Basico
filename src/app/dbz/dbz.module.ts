import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



import { MainPageComponent } from './main-page/main-page.component';
import { PersonjaesComponent } from './personjaes/personjaes.component';
import { AgregarComponent } from './agregar/agregar.component';
import { DbzService } from './services/dbz.service';




@NgModule({
  declarations: [
    MainPageComponent,
    PersonjaesComponent,
    AgregarComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    MainPageComponent,
    
  ],
  providers:[
    DbzService
  ]
})
export class DbzModule { }
