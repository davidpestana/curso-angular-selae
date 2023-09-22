import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillingComponent } from './billing.component';
import { DirectivaClienteDirective } from './directives/directiva-cliente.directive';



@NgModule({
  declarations: [
    BillingComponent,
    DirectivaClienteDirective
  ],
  exports: [],
  imports: [
    CommonModule
  ]
})
export class BillingModule { }
