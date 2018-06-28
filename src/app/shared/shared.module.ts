import { NgModule } from "@angular/core";
import { DropdownDirective } from "../directives/dropdown.directive";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "../header.component";
import { ActiveOnHoverDirective } from "../directives/active-on-hover.directive";
import { ElipsisPipe } from "../pipes/elipsis.pipe";

@NgModule({
    declarations: [
        DropdownDirective,
        HeaderComponent,
        ActiveOnHoverDirective,
        ElipsisPipe,
    ],
    exports: [
        CommonModule,
        DropdownDirective,
        HeaderComponent,
        ActiveOnHoverDirective,
        ElipsisPipe,
    ]
})
export class SharedModule {}