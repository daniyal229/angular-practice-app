import { Routes, RouterModule } from "@angular/router";
import { AuthGuardService } from "../../shared/services/auth-guard.service";
import { ShoppingListComponent } from "./components/shopping-list.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    { path: 'shopping-list', component: ShoppingListComponent, canActivate: [AuthGuardService] }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class ShoppingListRoutingModule {}