import { Directive , Input, TemplateRef , ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appTimes]',
  standalone: true
})
export class TimesDirective {

  @Input('appTimes') set render(times : number){
    for(let i = 0 ; i < times ; i++){
      this.VcRef.createEmbeddedView(this.templateRef,{
        index : i,
        color : 'red'
      });
    }
  }
  constructor(private templateRef : TemplateRef<any>,private VcRef : ViewContainerRef) {

   }

}
