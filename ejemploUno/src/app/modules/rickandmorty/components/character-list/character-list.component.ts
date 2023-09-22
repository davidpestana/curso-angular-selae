import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Character } from '../../models';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnChanges {
  @Input('characters') characters!: Character[] | null;
  @Input('locations') locations!: Location[] | null;

  ngOnChanges(changes: SimpleChanges): void {
      
  }

}
