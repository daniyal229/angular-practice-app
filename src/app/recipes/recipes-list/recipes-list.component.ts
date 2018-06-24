import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../models/recipe.model';


@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  @Output() recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe("Biryani","A dish of meat and rice","/assets/biryani.png"),
    new Recipe("Chicken Karahi","A dish of meat and rice","/assets/karahi.png"),
    new Recipe("Nihari","A dish of meat and rice","/assets/nihari.jpg"),
    new Recipe("Noodles","A dish of meat and rice","/assets/noodles.png"),
  ];

  constructor() { }

  ngOnInit() {
  }

  selectRecipe(recipe) {
    this.recipeSelected.emit(recipe);
  }

}
