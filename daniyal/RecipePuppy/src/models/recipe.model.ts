import { Ingredient } from "./ingredient.model";

export class Recipe {
    
    title: string
    thumbnail: string
    ingredients: Ingredient[]

    constructor(obj: Recipe) {
        this.title = obj.title;
        this.thumbnail = obj.thumbnail;
        this.ingredients = obj.ingredients
    }
}