import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('Tomatoes', 3, '/assets/tomato.png'),
    new Ingredient('Onions', 3, '/assets/onion.png'),
    new Ingredient('Peanuts', 3, '/assets/peanut.png')
  ];

  selectedIngredient;

  constructor() { }

  ngOnInit() {
  }

  clearSelectedIngredient() {
    this.selectedIngredient = '';
  }

  setSelectedIngredient(ingredient: Ingredient) {
    this.selectedIngredient = ingredient;
  }

  removeIngredient(removedIngredient: Ingredient) {
    let index = -1;
    for (const i in this.ingredients) {
      if (this.ingredients[i].name.toLowerCase() === removedIngredient.name.toLowerCase()) {
         index = parseInt(i, 10);
         break;
      }
    }
    if (index !== -1) {
      this.ingredients.splice(index, 1);
    }
    this.selectedIngredient = '';
  }

  addIngredient(newIngredient: Ingredient) {
    let ingredientExists = false;
    for (const i in this.ingredients) {
      if (this.ingredients[i].name.toLowerCase() === newIngredient.name.toLowerCase()) {
         this.ingredients[i].amount = this.ingredients[i].amount + newIngredient.amount;
         ingredientExists = true;
         break;
      }
    }
    if (!!!ingredientExists) {
      this.ingredients.push(newIngredient);
    }
  }

}
