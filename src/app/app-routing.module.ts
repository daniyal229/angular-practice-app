import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
//import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { AuthGuardService } from './services/auth-guard.service';
import { RecipeIngredientsEditComponent } from './recipes/recipe-ingredients-edit/recipe-ingredients-edit.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipesComponent, children: [
//    { path: '', component: RecipeStartComponent },
    { path: 'new', component: RecipeEditComponent , canActivate: [AuthGuardService]},
    { path: ':id', component: RecipeDetailComponent, canActivate: [AuthGuardService], children: [
      { path: 'ingredients', component: RecipeIngredientsEditComponent, canActivate: [AuthGuardService] }
    ] },
    { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuardService] },
  ], canActivate: [AuthGuardService] },
  { path: 'shopping-list', component: ShoppingListComponent, canActivate: [AuthGuardService] },
  { path: 'login', component: SignInComponent },
  { path: 'signup', component: SignUpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
