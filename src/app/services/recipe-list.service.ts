import 'rxjs/Rx';
import { Recipe } from '../models/recipe.model';
import { Ingredient } from '../models/ingredient.model';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';


@Injectable()
export class RecipeListService {

  private recipes: Recipe[] = [];
  private baseUrl = "http://localhost:3000";

  public getRecipes(): Observable<Response> {
    return this.http.get(this.baseUrl+"/recipes").map(
      (response: Response) => {
         return response.json();
      }
    );
  }

  public getRecipe(id: number) {
    return this.http.get(this.baseUrl+"/recipes/"+id).map(
      (response: Response) => {
         return response.json();
      }
    );
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
  }

  constructor(private http: Http) { 
    
  }
}
