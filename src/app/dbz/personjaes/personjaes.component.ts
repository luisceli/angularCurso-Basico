import { Component,Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personjaes',
  templateUrl: './personjaes.component.html',
  styleUrls: ['./personjaes.component.css']
})
export class PersonjaesComponent {
 
  // @Input()personajes:Personaje[]=[];

  get personajes(){
    return this.dbzService.personajes;
  }

  constructor(private dbzService:DbzService){
  }
}
