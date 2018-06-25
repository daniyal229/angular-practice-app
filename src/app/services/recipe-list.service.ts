import { Recipe } from '../models/recipe.model';
import { Ingredient } from '../models/ingredient.model';

export class RecipeListService {

  private recipes: Recipe[] = [
    new Recipe('Biryani', 'A dish of meat and rice', '/assets/biryani.png',
     [
       new Ingredient('Chicken', 1),
       new Ingredient('Salt', 10),
       new Ingredient('Rice', 5),
       new Ingredient('Tomatoes', 10),
       new Ingredient('Garlic', 10),
       new Ingredient('Onions', 5)
     ]
    ),
    new Recipe("Chicken Karahi","A dish of meat and rice","/assets/karahi.png"),
    new Recipe("Nihari","A dish of meat and rice","/assets/nihari.jpg"),
    new Recipe("Noodles","A dish of meat and rice","/assets/noodles.png"),
  ];

  public getRecipes(): Recipe[] {
    return this.recipes;
  }

  constructor() { }
}
