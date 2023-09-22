import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mejorAlumno'
})
export class MejorAlumnoPipe implements PipeTransform {

  transform(alumnos: string[]): string {
    return alumnos[0];
  }

}
