import { Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appAdvancedHighlight]'
})
export class AdvancedHighlightDirective implements OnInit {

  @HostBinding('style.backgroundColor') backgroundColor = 'pink';
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }
  ngOnInit(): void {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'pink');
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'pink');
    this.backgroundColor = 'pink';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    //  this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = 'transparent';
  }
}
