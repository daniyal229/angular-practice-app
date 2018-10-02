import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'recipes', loadChildren: './features/recipes/recipes.module#RecipesModule'},
  { path: 'shopping-list', loadChildren: "./features/shopping-list/shopping-list.module#ShoppingListModule"},
  { path: 'auth', loadChildren: "./features/auth/auth.module#AuthModule"}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
