import { HttpClient } from '@angular/common/http';
import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { result } from 'cypress/types/lodash';
import { BehaviorSubject, Observable, Subject, Subscription, combineLatest, concatAll, concatMap, map, of, switchMap } from 'rxjs';
import { MainService } from './main.service';
import { FormControl, FormGroup, Validators, ControlValueAccessor } from '@angular/forms';
import { CharactersService } from './modules/rickandmorty/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
   toogle = true;
   personajes$: Observable<number>;


   constructor(charactersService: CharactersService) {
    this.personajes$ = charactersService.count;
   }

  change() {
    this.toogle = !this.toogle;
  }
}
