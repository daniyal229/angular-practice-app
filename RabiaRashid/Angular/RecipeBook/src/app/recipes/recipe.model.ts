import { Ingredient } from "../shared/ingredient.model";

export class Recipe {
    public name:string;
    public desc:string;
    public imgPath:string;
    public ings:Ingredient[];

    constructor(name:string,desc:string,imgSrc:string,ings:Ingredient[]){
        this.name=name;
        this.desc=desc;
        this.imgPath=imgSrc;
        this.ings=ings;

    }
}