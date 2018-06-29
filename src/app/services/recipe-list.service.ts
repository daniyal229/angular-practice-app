import { Recipe } from '../models/recipe.model';
import { Ingredient } from '../models/ingredient.model';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AuthService } from './auth.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeListService {


  public ingredientAddedToRecipe = new Subject<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(1, 'Biryani', 'A dish of meat and rice', '/assets/biryani.png',
     [
       new Ingredient('Chicken', 1),
       new Ingredient('Rice', 5),
       new Ingredient('Tomatoes', 10),
       new Ingredient('Garlic', 10),
       new Ingredient('Onions', 5)
     ]
    ),
    new Recipe(2, 'Chicken Karahi', 'A dish of meat and rice', '/assets/karahi.png'),
    new Recipe(3, 'Nihari', 'A dish of meat and rice', '/assets/nihari.jpg'),
    new Recipe(4, 'Noodles', 'A dish of meat and rice', '/assets/noodles.png'),
  ];

  public saveRecipes(){
    return this.http.put("https://recipebook-3e9c5.firebaseio.com/recipes.json?auth="+this.auth.token,this.recipes);
  }

  public fetchRecipes(){
     this.http.get("https://recipebook-3e9c5.firebaseio.com/recipes.json?auth="+this.auth.token).subscribe(
       (response: Response) => {
         let recipes: Recipe[] = response.json();
         this.recipes = recipes || [];
       }
     )
  }

  public addIngredientToRecipe(recipe,ingredient){
    let selectedRecipe = this.getRecipe(recipe.id);
    let ingredientExists = false;
    for (const i in selectedRecipe.ingredients) {
      if (selectedRecipe.ingredients[i].name.toLowerCase() === ingredient.name.toLowerCase()) {
        selectedRecipe.ingredients[i].amount = selectedRecipe.ingredients[i].amount + ingredient.amount;
        ingredientExists = true;
        break;
      }
    }
    if (!!!ingredientExists) {
      selectedRecipe.ingredients.push(ingredient);
    }
    this.saveRecipes().subscribe(
      (response: Response) => {
        this.ingredientAddedToRecipe.next(selectedRecipe);
        console.log(response);
      }
    );   
  }

  public getRecipes(): Recipe[] {
    return this.recipes;
  }

  public getRecipe(id: number) {
    let selectedRecipe: any = '';
    for (const recipe of this.recipes){
      if (recipe.id === id) {
        selectedRecipe = recipe;
        break;
      }
    }
    return selectedRecipe;
  }

  public removeRecipe(id: number){
    let selectedRecipeIndex: number = -1;
    let iterator: number = 0;
    for (const recipe of this.recipes){
      if (recipe.id === id) {
        selectedRecipeIndex = iterator;
        break;
      }
      iterator = iterator + 1;
    }
    if (selectedRecipeIndex !== -1) {
      this.recipes.splice(selectedRecipeIndex,1)
    }
  }

  public addRecipe(recipe: Recipe) {
    let retrievedRecipe : any = this.getRecipe(recipe.id);
    if(!!retrievedRecipe){
      for(let property of ['name','description','ingredients', 'imageSrc']){
        retrievedRecipe[property] = recipe[property]
      }
    } else {
      this.recipes.push(recipe);
    }
    return this.saveRecipes()
  }

  constructor(private http: Http, private auth: AuthService) {
    this.fetchRecipes();
  }
}
