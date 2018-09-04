import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { ElipsisPipe } from "./pipes/elipsis.pipe";
import { ActiveOnHoverDirective } from "./directives/active-on-hover.directive";
import { DropdownDirective } from "./directives/dropdown.directive";
import { RouterModule } from "@angular/router";
import { HeaderComponent } from "./components/header/header.component";
import { SidenavDirective } from "./directives/sidenav.directive";

@NgModule({
    declarations: [
        HeaderComponent,
        ElipsisPipe,
        ActiveOnHoverDirective,
        DropdownDirective,
        SidenavDirective
    ],
    imports: [
        FormsModule,
        HttpModule,
        CommonModule,
        RouterModule
    ],
    exports: [
        FormsModule,
        HttpModule,
        CommonModule,
        RouterModule,
        HeaderComponent
    ]
})
export class SharedModule {}