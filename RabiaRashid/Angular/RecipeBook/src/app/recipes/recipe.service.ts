import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import {Http, Response} from '@angular/http'
import {Subject} from 'rxjs'
import 'rxjs/Rx'
import { AuthService } from "../auth/auth.service";

@Injectable()
export class RecipeService{
    recChanged=new Subject<Recipe[]>();

    constructor(private http:Http,private authService:AuthService){}

    private recipes:Recipe[]= [
        new Recipe('pizza',
        'A super-tasty pepperoni beef pizza',
        'https://www.cicis.com/media/1176/pizza_trad_pepperonibeef.png',
        [new Ingredient('pepperoni',8),
        new Ingredient('beef',2)]),
        new Recipe('burger',
        'The best beef burger of town',
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/impossible-burger-1523482169.jpg?crop=1.00xw:0.748xh;0,0.156xh&resize=768:*',
        [new Ingredient('buns',2),
        new Ingredient('beef',1)])];
    
    // private selectedRecipe:Recipe;
    // recEvent=new EventEmitter<Recipe>();
    // ingToShoppingListEvent = new EventEmitter<Ingredient[]>();
    getRecipes(){
        return this.recipes.slice();
    }

    getRecipeByIndex(ind):Recipe{
        return this.recipes[ind];
    }
    // getSelectedRecipe(){
    //     return this.selectedRecipe.slice();
    // }

    // setSelectedRecipe(r:Recipe){
    //     this.selectedRecipe=r;
    // }

    addRecipe(rec:Recipe){
        this.recipes.push(rec)
        this.recChanged.next(this.recipes.slice())
    }
    updateRecipe(ind:number,rec:Recipe){
        this.recipes[ind]=rec;
        this.recChanged.next(this.recipes.slice())
    }

    deleteRecipe(ind:number)
    {
        this.recipes.splice(ind,1);
        this.recChanged.next(this.recipes.slice())
    }

    saveRecipesToServer(rec:Recipe[]){
        console.log('qqqq',rec)
        const tk=this.authService.getToken()
        return this.http.put('https://ng-recipe-book-2345d.firebaseio.com/recipes.json?auth='+tk,rec);
    }

    FetchRecipesFromServer(){
        const tk=this.authService.getToken()
        console.log('tokeeennn'+tk)
        return this.http.get('https://ng-recipe-book-2345d.firebaseio.com/recipes.json?auth='+tk).map((resp:Response)=>{
            const recipes:Recipe[]=resp.json();
            console.log('b4',recipes)
            for(let rec of recipes){
                if(!(rec['ings']))
                    {console.log(rec);rec['ings']=[];}
            }
            console.log('after',recipes)
            return recipes;
        })

    }

    setRecipes(recs:Recipe[]){
        this.recipes=recs;
        this.recChanged.next(this.recipes.slice())
    }
    

}