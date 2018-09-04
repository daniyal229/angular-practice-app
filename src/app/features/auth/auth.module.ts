import { NgModule } from "@angular/core";
import { SignInComponent } from "./components/sign-in/sign-in.component";
import { SignUpComponent } from "./components/sign-up/sign-up.component";
import { SharedModule } from "../../shared/shared.module";

@NgModule({
    declarations: [
        SignInComponent,
        SignUpComponent
    ],
    imports: [
        SharedModule
    ]
})
export class AuthModule {}