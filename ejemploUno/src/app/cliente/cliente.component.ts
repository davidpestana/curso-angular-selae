import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

interface Cliente {
  name: string,
  age: number,
}

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent {

  @Input({required: true }) cliente: Cliente | undefined;
  @Output('change') onChange = new EventEmitter<Cliente>();

  constructor() {
    console.log('construyendo cliente');
  }

  // two way binding  => mapear el ngModel al Cliente

  protected birthday() {
    this.cliente && this.cliente.age++;
    this.onChange.emit(this.cliente)
  }

  // => Inyectar un ngModel compuesto
}
