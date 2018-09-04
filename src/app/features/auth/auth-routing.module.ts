import { Routes, RouterModule } from "@angular/router";
import { SignInComponent } from "./components/sign-in/sign-in.component";
import { SignUpComponent } from "./components/sign-up/sign-up.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    { path: 'login', component: SignInComponent },
    { path: 'signup', component: SignUpComponent }  
]
@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AuthRoutingModule {}