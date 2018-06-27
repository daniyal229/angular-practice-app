import { Ingredient } from '../models/ingredient.model';

export class ShoppingListService {

  public ingredients: Ingredient[] = [
    new Ingredient(1, 'tomato', 3, '/assets/tomato.png'),
    new Ingredient(2, 'onion', 3, '/assets/onion.png'),
    new Ingredient(3, 'garlic', 3, '/assets/peanut.png')
  ];

  removeIngredient(ingredient) {
    let index = -1;
    for (const i in this.ingredients) {
      if (this.ingredients[i].id === ingredient.id) {
         index = parseInt(i, 10);
         break;
      }
    }
    if (index !== -1) {
      this.ingredients.splice(index, 1);
    }
  }

  addIngredient(ingredient: Ingredient) {
    let ingredientExists = false;
    for (const i in this.ingredients) {
      if (this.ingredients[i].id === ingredient.id) {
         this.ingredients[i].amount = this.ingredients[i].amount + ingredient.amount;
         ingredientExists = true;
         break;
      }
    }
    if (!!!ingredientExists) {
      this.ingredients.push(ingredient);
    }
  }

  addIngredients(ingredients: Ingredient[]) {
    for (const ingredient of ingredients) {
      this.addIngredient(new Ingredient(ingredient.id,ingredient.name, ingredient.amount));
    }
  }

}
