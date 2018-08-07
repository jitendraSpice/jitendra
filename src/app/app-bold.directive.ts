import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appAppBold]'
})
export class AppBoldDirective {

  constructor(private elementRef:ElementRef) { }
 @HostListener('mouseenter')onmouseenter(){
   this.elementRef.nativeElement.style.fontWeight='bold';
   this.elementRef.nativeElement.style.backgroundColor='grey';
 }

 @HostListener('mouseleave')onmouseleave(){
  this.elementRef.nativeElement.style.fontWeight='normal';
  this.elementRef.nativeElement.style.backgroundColor='initial';
}
}
