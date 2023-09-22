import { Component } from '@angular/core';
import { CharactersService, LocationsService } from './services';
import { Observable, of } from 'rxjs';
import { Character, Location } from './models';

@Component({
  selector: 'app-rickandmorty',
  templateUrl: './rickandmorty.component.html',
  styleUrls: ['./rickandmorty.component.css']
})
export class RickandmortyComponent {

  characters$: Observable<Character[]>;
  locations$: Observable<Location[]>;

  constructor(private charactersService:CharactersService, private locationsService: LocationsService) {
    this.characters$ = this.charactersService.characters;
    this.locations$ = this.locationsService.locations;
  }

  nextPage() {
    this.charactersService.nextPage();
  }

}
