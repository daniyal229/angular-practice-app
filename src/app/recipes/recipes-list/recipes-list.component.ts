import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { RecipeListService } from '../../services/recipe-list.service';
import { Recipe } from '../../models/recipe.model';
import { Observable } from 'rxjs';
import { Response } from '@angular/http';
import { Ingredient } from '../../models/ingredient.model';


@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipes = [];
  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor(private recipeList: RecipeListService) { }

  ngOnInit() {
    this.recipeList.getRecipes().subscribe(
      (recipes: any) => {
         for(let recipe of recipes){
            let r = new Recipe(recipe.id, recipe.name, recipe.description);
            for(let ingredient of recipe.ingredients){
              r.ingredients.push(new Ingredient(ingredient.id, ingredient.name, ingredient.amount, ingredient.imageSrc));
            }
            this.recipes.push(r);
         }
      }
    );
  }

  selectRecipe(recipe) {
    this.recipeSelected.emit(recipe);
  }

}
