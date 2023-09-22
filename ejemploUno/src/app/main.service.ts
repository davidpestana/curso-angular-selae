import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, combineLatest, map, filter, tap, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  contador$ = new BehaviorSubject(0);
  multiplicador$ = new BehaviorSubject(5);

  constructor() {
    setInterval(() => {
      this.contador$.next(this.contador$.value+1);
    },1000);

    setInterval(() => {
      this.multiplicador$.next(Math.random());
    },1500);
  }

  get contador(): Observable<number> {
    return this.contador$.asObservable();
  }

  get multiplicador(): Observable<number> {
    return this.multiplicador$.asObservable();
  }

  get combinado(): Observable<number> {
   return combineLatest([this.contador,this.multiplicador])
    .pipe(map(([contador, multiplicador]) => contador * multiplicador))
  }

  get filtrado(): Observable<number> {
     return this.combinado.pipe(
      tap((value) => console.log(value)),
      filter((number)=> number > 1),
      tap((value) => console.log(value)),
    )
  }

  get cadena(): Observable<string> {
    return this.combinado.pipe(
      map((value) => value.toString())
    );
  }



  devuelveUnaPromesa(): Promise<number> {

    return new Promise((resolve, reject) => {
      // pasado un tiempo
      // devuelvo numero o genero error
      if(true) {
        resolve(5)
      }else{
        reject('no hay numero');
      }

    })
  }

  devuelveObservable(): Observable<any> {
    return new Observable((subscriber: Subscriber<any>) => {
      let page: number = 1;
      const loadPage = () => {
        fetch('https://rickandmortyapi.com/api/character?page='+page++)
          .then(r => 'last' ? subscriber.complete() : subscriber.next(r))
          .catch(error => subscriber.error(error))
      }
      // setInterval(loadPage,1000);
    })
  }
}
