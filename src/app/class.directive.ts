//import { Directive , ElementRef,HostBinding,HostListener,Input,Renderer2} from '@angular/core';
import { Directive , ElementRef,Input} from '@angular/core';

@Directive({
  selector: '[appClass]',
  standalone: true
})
export class ClassDirective {
  @Input('appClass') set backgroundColor(color : string){
    this.elementRef.nativeElement.style.backgroundColor = color;

  };
  constructor(private elementRef : ElementRef){

  }

  //@Input() color : string = 'red';
  // @HostBinding('style.backgroundColor') backgrounColor : string = 'yellow'
  // constructor(private elementRef : ElementRef,private renderer : Renderer2) {
  //   //this.elementRef.nativeElement.style.backgroundColor = 'red';
  //   // this.renderer.setStyle(this.elementRef.nativeElement,'background-color','red')
  // }
  // @HostListener('mouseenter') onMouseOver(){
  //   //this.renderer.setStyle(this.elementRef.nativeElement,'background-color','red')
  //   this.backgrounColor = "red"
  // }
  // @HostListener('mouseleave') onMouseOut(){
  //   //this.renderer.setStyle(this.elementRef.nativeElement,'background-color','transparent')
  //   this.backgrounColor = "green"
  // }

  // constructor(private elementRef : ElementRef){
  //   this.elementRef.nativeElement.style.backgroundColor = this.color;
  // }

}
