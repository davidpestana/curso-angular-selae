import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RickandmortyComponent } from './rickandmorty.component';
import { CharacterListComponent, CharacterComponent } from './components';

@NgModule({
  declarations: [
    RickandmortyComponent,
    CharacterListComponent,
    CharacterComponent
  ],
  exports: [
    RickandmortyComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class RickandmortyModule { }
