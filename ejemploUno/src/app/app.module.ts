import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EjemploComponent } from './shared/ejemplo/ejemplo.component';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClienteComponent } from './cliente/cliente.component';
import { MiDirectivaDirective } from './mi-directiva.directive';
import { DirectivaClienteDirective } from './cliente/directiva-cliente.directive';
import { NglrxPipesModule } from '@nglrx/pipes';
import { MejorAlumnoPipe } from './mejor-alumno.pipe';
import { HttpClientModule } from '@angular/common/http';
import { SuscritoComponent } from './suscrito/suscrito.component';
import { MainService } from './main.service';
import { BillingModule } from './billing/billing.module';
import { RickandmortyModule } from './modules/rickandmorty/rickandmorty.module';

let routes: Routes = [];
let config: ExtraOptions = {};
@NgModule({
  declarations: [
    AppComponent,
    EjemploComponent,
    ClienteComponent,
    MiDirectivaDirective,
    DirectivaClienteDirective,
    MejorAlumnoPipe,
    SuscritoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, config),
    FormsModule,
    NglrxPipesModule,
    HttpClientModule,
    BillingModule,
    ReactiveFormsModule,
    RickandmortyModule
  ],
  exports: [],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'fr-FR'
    },
    MainService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
