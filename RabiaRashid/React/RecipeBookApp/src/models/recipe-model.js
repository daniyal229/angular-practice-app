import { Ingredient } from "./ingredient-model";
export default class Recipe {
    // var name;
    // var desc;
    // var imgPath;

    constructor(name, desc, imgSrc, ings){
        this.name = name;
        this.desc = desc;
        this.imgPath = imgSrc;
        this.ings = ings;
    }
}