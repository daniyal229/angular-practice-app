import { NgModule } from "@angular/core";
import { RecipesComponent } from "./components/recipes.component";
import { RecipesListComponent } from "./components/recipes-list/recipes-list.component";
import { RecipeIngredientsEditComponent } from "./components/recipe-ingredients-edit/recipe-ingredients-edit.component";
import { RecipeEditComponent } from "./components/recipe-edit/recipe-edit.component";
import { RecipeDetailComponent } from "./components/recipe-detail/recipe-detail.component";
import { RecipeItemComponent } from "./components/recipes-list/recipe-item/recipe-item.component";
import { SharedModule } from "../../shared/shared.module";
import { RecipesRoutingModule } from "./recipe-routing.module";

@NgModule({
    declarations: [
        RecipesComponent,
        RecipesListComponent,
        RecipeIngredientsEditComponent,
        RecipeEditComponent,
        RecipeDetailComponent,
        RecipeItemComponent
    ], 
    imports: [
        SharedModule,
        RecipesRoutingModule
    ]
})
export class RecipesModule {}