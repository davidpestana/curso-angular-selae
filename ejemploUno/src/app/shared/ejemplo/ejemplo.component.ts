import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplo',
  templateUrl: './ejemplo.component.html',
  styleUrls: ['./ejemplo.component.scss'],
})
export class EjemploComponent {
  logoReact = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png';
  logoAngular = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png';
  logoVue = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png';
  logoSvelte = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/498px-Svelte_Logo.svg.png';

  getLogoAngular(): string {
    console.log('pintando');
    return this.logoAngular
  }

  get urlLogoVue(): string {
    console.log('getter call');
    return this.logoVue
  }

  hiceClick({target}:any, where:string) {
    console.log('se hizo click en', where, target);
  }


}
