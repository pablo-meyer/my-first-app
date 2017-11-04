import { Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appAdvancedHighlight]'
})
export class AdvancedHighlightDirective implements OnInit {
  @Input() color1: string;
  @Input('appAdvancedHighlight') color2: string;
  @HostBinding('style.backgroundColor') backgroundColor;
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }
  ngOnInit(): void {
    this.backgroundColor = this.color1;
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'pink');
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'pink');
    this.backgroundColor = this.color2;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    //  this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.color1;
  }
}
