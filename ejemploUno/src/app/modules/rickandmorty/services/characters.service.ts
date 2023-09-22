import { result } from 'cypress/types/lodash';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap, map } from 'rxjs';
import { Character } from '../models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  _characters: BehaviorSubject<Character[]> = new BehaviorSubject<Character[]>([]);
  _info: BehaviorSubject<any> = new BehaviorSubject<any>({})
  protected page: number = 0;

  constructor(private http:HttpClient) {
    this.load(1);
  }

  load(page = 1):void {
    this.page = page;
    this.http.get(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .pipe(tap(({info, results}: any) => {
        this._characters.next(this._characters.getValue().concat(results));
        this._info.next(info);
      }))
      .subscribe();
  }

  nextPage() {
    this.load(this.page + 1);
  }


  get characters(): Observable<Character[]> {
    return this._characters.asObservable();
  }

  get count(): Observable<number> {
    return this._characters.asObservable()
      .pipe(map((characters: Character[]) => characters.length ));
  }

}
