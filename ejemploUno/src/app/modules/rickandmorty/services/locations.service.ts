import { Injectable } from '@angular/core';
import { Location } from '../models';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  constructor() { }

  get locations(): Observable<Location[]> {
    return of([])
  }

}
