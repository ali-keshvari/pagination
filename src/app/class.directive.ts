import { Directive , ElementRef} from '@angular/core';

@Directive({
  selector: '[appClass]',
  standalone: true
})
export class ClassDirective {

  constructor(private elementRef : ElementRef) {
    this.elementRef.nativeElement.style.backgroundColor = 'red';
  }

}
