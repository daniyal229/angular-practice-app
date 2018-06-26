import { Ingredient } from './ingredient.model'

export class Recipe {
  public id: number;
  public name: string;
  public description: string;
  public imageSrc: string;
  public ingredients: Ingredient[];

  constructor(id: number, name: string, description: string, imageSrc: string = '/assets/noimage.png', ingredients: Ingredient[] = []) {
    this.name = name;
    this.id = id;
    this.description = description;
    this.imageSrc = imageSrc;
    this.ingredients = ingredients;
  }

}
