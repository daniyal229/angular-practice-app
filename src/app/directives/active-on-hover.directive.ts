import { Directive, Renderer2, OnInit, HostListener, ElementRef, HostBinding } from '@angular/core';

@Directive({
  selector: '[appActiveOnHover]'
})
export class ActiveOnHoverDirective implements OnInit {

  ngOnInit() {

  }

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') mouseenter(eventData: Event) {
    this.renderer.addClass(this.elementRef.nativeElement, 'active');
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.renderer.removeClass(this.elementRef.nativeElement, 'active');
  }

}
