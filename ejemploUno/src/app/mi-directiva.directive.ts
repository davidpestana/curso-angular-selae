import { Directive, HostBinding, HostListener, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMiDirectiva]'
})
export class MiDirectivaDirective {
 
  constructor(private readonly viewRef: ViewContainerRef) {

    console.log(this.viewRef.element.nativeElement);
}

}
