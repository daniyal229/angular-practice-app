import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
import { ElipsisPipe } from "./pipes/elipsis.pipe";
import { ActiveOnHoverDirective } from "./directives/active-on-hover.directive";
import { DropdownDirective } from "./directives/dropdown.directive";
import { RouterModule } from "@angular/router";
import { HeaderComponent } from "./components/header/header.component";
import { SidenavDirective } from "./directives/sidenav.directive";
import { HomeComponent } from './components/home/home.component';

@NgModule({
    declarations: [
        HeaderComponent,
        ElipsisPipe,
        ActiveOnHoverDirective,
        DropdownDirective,
        SidenavDirective,
        HomeComponent
    ],
    imports: [
        FormsModule,
        HttpModule,
        HttpClientModule,
        CommonModule,
        RouterModule
    ],
    exports: [
        FormsModule,
        HttpModule,
        CommonModule,
        RouterModule,
        HeaderComponent,
        HomeComponent,
        ElipsisPipe,
        ActiveOnHoverDirective,
        DropdownDirective
    ]
})
export class SharedModule {}