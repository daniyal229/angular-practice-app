import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './shared/services/auth.service';
import { AuthGuardService } from './shared/services/auth-guard.service';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './features/auth/auth.module';
import { RecipesModule } from './features/recipes/recipes.module';
import { ShoppingListModule } from './features/shopping-list/shopping-list.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AuthModule,
    RecipesModule,
    ShoppingListModule,
    AppRoutingModule
  ],
  providers: [AuthGuardService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
