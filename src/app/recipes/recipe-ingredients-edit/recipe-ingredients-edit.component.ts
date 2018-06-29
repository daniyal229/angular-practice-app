import { Component, OnInit, ViewChild } from '@angular/core';
import { Recipe } from '../../models/recipe.model';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeListService } from '../../services/recipe-list.service';
import $ from 'jquery';
import { Ingredient } from '../../models/ingredient.model';

@Component({
  selector: 'app-recipe-ingredients-edit',
  templateUrl: './recipe-ingredients-edit.component.html',
  styleUrls: ['./recipe-ingredients-edit.component.css']
})
export class RecipeIngredientsEditComponent implements OnInit {

  @ViewChild('ingredientName') ingredientNameInput;
  @ViewChild('ingredientAmount') ingredientAmountInput;

  recipe: Recipe = null;
  recipeForIngredients: Recipe = null;
  selectedIngredient: Ingredient = null;
  constructor(private route: ActivatedRoute, private recipeListService: RecipeListService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.recipeForIngredients = this.recipe = $.extend({},this.recipeListService.getRecipe(+params['id']));
      }
    );
  }

  setSelectedIngredient(ingredient){
    this.selectedIngredient=ingredient;
  }

  clear() {
    this.ingredientAmountInput.nativeElement.value = null;
    this.ingredientNameInput.nativeElement.value = null;
  }

  addIngredient() {
    if (!!this.ingredientNameInput.nativeElement.value && !!this.ingredientAmountInput.nativeElement.value) {
      const ingredient = new Ingredient(this.ingredientNameInput.nativeElement.value,
        parseInt(this.ingredientAmountInput.nativeElement.value, 10));
      this.recipeListService.addIngredientToRecipe(this.recipe,ingredient);
      this.ingredientNameInput.nativeElement.value = '';
      this.ingredientAmountInput.nativeElement.value = '';
    } else {
      alert('Please fill in ingredient name and amount.');
    }
  }

}
