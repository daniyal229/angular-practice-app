import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './features/recipes/components/recipes.component';
import { ShoppingListComponent } from './features/shopping-list/components/shopping-list.component';
//import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent } from './features/recipes/components/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './features/recipes/components/recipe-edit/recipe-edit.component';
import { SignInComponent } from './features/auth/components/sign-in/sign-in.component';
import { SignUpComponent } from './features/auth/components/sign-up/sign-up.component';
import { AuthGuardService } from './shared/services/auth-guard.service';
import { RecipeIngredientsEditComponent } from './features/recipes/components/recipe-ingredients-edit/recipe-ingredients-edit.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
