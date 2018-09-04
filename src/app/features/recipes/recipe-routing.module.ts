import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { RecipesComponent } from "./components/recipes.component";
import { RecipeEditComponent } from "./components/recipe-edit/recipe-edit.component";
import { AuthGuardService } from "../../shared/services/auth-guard.service";
import { RecipeIngredientsEditComponent } from "./components/recipe-ingredients-edit/recipe-ingredients-edit.component";
import { RecipeDetailComponent } from "./components/recipe-detail/recipe-detail.component";

const routes: Routes = [
    {
        path: 'recipes', component: RecipesComponent, canActivate: [AuthGuardService]
    },
    { path: 'recipes/new', component: RecipeEditComponent, canActivate: [AuthGuardService] },
    {
        path: 'recipes/:id', component: RecipeDetailComponent, canActivate: [AuthGuardService], children: [
            { path: 'ingredients', component: RecipeIngredientsEditComponent, canActivate: [AuthGuardService] }
        ]
    },
    { path: 'recipes/:id/edit', component: RecipeEditComponent, canActivate: [AuthGuardService] }

]
@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class RecipesRoutingModule { }