import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appSetClass]',
  standalone: true
})
export class SetClassDirective {

  @Input('appSetClass') set ClassName(classObj : any){
    for(let key in classObj){
      console.log("key : " + key)
      console.log("Value : " + classObj[key])
      if(classObj[key]){
        this.elementRef.nativeElement.classList.add(key);
      }
      else{
        this.elementRef.nativeElement.classList.remove(key);
      }
    }
  }
  constructor(private elementRef : ElementRef) { }

}
