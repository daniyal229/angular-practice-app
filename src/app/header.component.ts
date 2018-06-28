import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { RecipeListService } from './services/recipe-list.service';
import { Response } from '@angular/http';
import { ShoppingListService } from './services/shopping-list.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private recipeService: RecipeListService, private shoppingList: ShoppingListService) { }

  ngOnInit() {
  }

  fetchData(){
    this.recipeService.fetchRecipes();
    this.shoppingList.fetchIngredients();
  }

  saveData(){
    this.recipeService.saveRecipes().subscribe(
      (response: Response) => {
        alert("Recipes have been saved");
      }
      ,(error: Response) => {
        console.log(error);
      }
    );
  }

}
