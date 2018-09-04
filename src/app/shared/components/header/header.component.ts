import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { RecipeListService } from '../../services/recipe-list.service';
import { ShoppingListService } from '../../services/shopping-list.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private recipeService: RecipeListService, private shoppingList: ShoppingListService, public auth: AuthService) { }

  ngOnInit() {
    
  }

  logout(){
    this.auth.logout();
  }

  fetchData(){
    if(this.auth.isAuthenticated()){
      this.recipeService.fetchRecipes();
      this.shoppingList.fetchIngredients();
    }
  }

  saveData(){
    if(this.auth.isAuthenticated()){
      this.recipeService.saveRecipes();
    }
  }

}
