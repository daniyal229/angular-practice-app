import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { RecipeListService } from '../../services/recipe-list.service';
import { Recipe } from '../../models/recipe.model';


@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor(private recipeList: RecipeListService) { }

  ngOnInit() {
  }

  selectRecipe(recipe) {
    this.recipeSelected.emit(recipe);
  }

}
