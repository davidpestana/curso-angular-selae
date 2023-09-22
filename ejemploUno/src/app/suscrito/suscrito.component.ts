import { Component } from '@angular/core';
import { MainService } from '../main.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-suscrito',
  templateUrl: './suscrito.component.html',
  styleUrls: ['./suscrito.component.css']
})
export class SuscritoComponent {

  contador$: Observable<number>;

  constructor(mainService: MainService) {
    this.contador$ = mainService.contador;
  }

}
