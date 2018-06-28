import { Ingredient } from '../models/ingredient.model';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AuthService } from './auth.service';

@Injectable()
export class ShoppingListService {

  public ingredients: Ingredient[] = [
    new Ingredient('Tomatoes', 3, '/assets/tomato.png'),
    new Ingredient('Onions', 3, '/assets/onion.png'),
    new Ingredient('Peanuts', 3, '/assets/peanut.png')
  ];

  saveIngredients(){
    return this.http.put("https://recipebook-3e9c5.firebaseio.com/ingredients.json?auth="+this.auth.token,this.ingredients)
  }

  fetchIngredients(){
    this.http.get("https://recipebook-3e9c5.firebaseio.com/ingredients.json?auth="+this.auth.token).subscribe(
      (response: Response) => {
        let ingredients: Ingredient[] = response.json()
        this.ingredients = ingredients || [];
      }
    )
  }

  removeIngredient(ingredient) {
    let index = -1;
    for (const i in this.ingredients) {
      if (this.ingredients[i].name.toLowerCase() === ingredient.name.toLowerCase()) {
         index = parseInt(i, 10);
         break;
      }
    }
    if (index !== -1) {
      this.ingredients.splice(index, 1);
    }
    this.saveIngredients().subscribe(
      (response: Response) => console.log("Ingredient Removed")
     );
  }

  addIngredient(ingredient: Ingredient, save: boolean = true) {
    let ingredientExists = false;
    for (const i in this.ingredients) {
      if (this.ingredients[i].name.toLowerCase() === ingredient.name.toLowerCase()) {
         this.ingredients[i].amount = this.ingredients[i].amount + ingredient.amount;
         ingredientExists = true;
         break;
      }
    }
    if (!!!ingredientExists) {
      this.ingredients.push(ingredient);
    }
    if(!!save){
      this.saveIngredients().subscribe(
       (response: Response) => console.log("Ingredient Saved")
      );
    }
  }

  addIngredients(ingredients: Ingredient[]) {
    for (const ingredient of ingredients) {
      this.addIngredient(new Ingredient(ingredient.name, ingredient.amount),false);
    }
    this.saveIngredients().subscribe(
      (response: Response) => {
        alert("Ingredients added to the shopping list.")
      }
    )
  }

  constructor(private http: Http, private auth: AuthService) {
    this.fetchIngredients();
  }

}
