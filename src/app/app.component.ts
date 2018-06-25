import { Component } from '@angular/core';
import { ShoppingListService } from './services/shopping-list.service';
import { RecipeListService } from './services/recipe-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ShoppingListService, RecipeListService]
})
export class AppComponent {
   
   constructor(public shoppingList: ShoppingListService, public recipeList: RecipeListService) { }
   
   recipesVisible = true;

   showRecipes(data: any) {
   	  this.recipesVisible = true;
   }

   showShoppingList(data: any) {
   	  this.recipesVisible = false;
   }

}
