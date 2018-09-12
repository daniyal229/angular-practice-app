import { Directive, HostListener, ElementRef, Renderer2, HostBinding } from "@angular/core";

@Directive({
    selector:'[appDropdown]'
})

export class DropdownDirective{
    isOpen:boolean=false;
    constructor(private elRef:ElementRef, private renderer:Renderer2){}

    @HostListener('click') dropdownclicked(eventData:Event){
        // console.log(this.elRef)
        if(!this.isOpen){
        this.renderer.addClass(this.elRef.nativeElement.nextSibling,'show')
        this.isOpen=true;
        }
        else{
         this.renderer.removeClass(this.elRef.nativeElement.nextSibling,'show')
         this.isOpen=false;
        }
    }

}