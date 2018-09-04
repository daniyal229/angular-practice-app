import { Directive, ElementRef } from '@angular/core';
import * as $ from 'jquery';
declare var $:$;

@Directive({
  selector: '[appSidenav]'
})
export class SidenavDirective {

  constructor(private el: ElementRef) { }

  ngOnInit() {
    $(this.el.nativeElement).sidenav();
    $(this.el.nativeElement).find("li").click(
      event => {
        $(this.el.nativeElement).sidenav('close');
      }
    )
  }

}
