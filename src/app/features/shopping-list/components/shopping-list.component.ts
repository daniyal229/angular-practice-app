import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from '../../../shared/models/ingredient.model';
import { ShoppingListService } from '../../../shared/services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent implements OnInit {

  selectedIngredient;
  ingredients: Ingredient[];

  constructor(private shoppingList: ShoppingListService) { }

  ngOnInit() {
  }

  clearSelectedIngredient() {
    this.selectedIngredient = '';
  }

  setSelectedIngredient(ingredient: Ingredient) {
    this.selectedIngredient = ingredient;
  }

  removeIngredient(removedIngredient: Ingredient) {
    this.shoppingList.removeIngredient(removedIngredient);
    this.selectedIngredient = '';
  }

  addIngredient(newIngredient: Ingredient) {
    this.shoppingList.addIngredient(newIngredient);
  }

}
