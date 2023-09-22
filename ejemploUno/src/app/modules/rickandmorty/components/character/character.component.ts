import { Component, Input } from '@angular/core';
import { Character } from '../../models';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent {
  @Input('character') character?:Character;
}
