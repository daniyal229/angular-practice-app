import { Recipe } from '../models/recipe.model';
import { Ingredient } from '../models/ingredient.model';

export class RecipeListService {

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
  }

  constructor() { }
}
