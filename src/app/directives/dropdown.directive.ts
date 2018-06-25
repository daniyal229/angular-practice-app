import { Directive, ElementRef, OnInit } from '@angular/core';
import M from 'materialize-css';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit{

  constructor(private elementRef: ElementRef) { }
  
  ngOnInit() {
    M.Dropdown.init(this.elementRef.nativeElement, {});
  }

}
