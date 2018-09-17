import {Ingredient} from '../shared/ingredient.model'
import { EventEmitter, Injectable } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { Subject } from 'rxjs';
@Injectable()
export class ShoppingService {
    // ingsChanged=new EventEmitter<Ingredient[]>();
    ingsChanged= new Subject<Ingredient[]>();
    startedEditing= new Subject<number>();
    private ings=[
        new Ingredient('Apples',5),
        new Ingredient('Tomatoes',10)
      ] 

      constructor(private recService:RecipeService){}

      getIngredients(){
        console.log('ererwer')
        //   this.recService.ingToShoppingListEvent.subscribe((ingredients:Ingredient[])=>this.ings=ingredients);
        console.log(this.ings);
          return this.ings.slice();
      }

      addIngredients(ing:Ingredient){
       
          this.ings.push(ing);
          this.ingsChanged.next(this.ings.slice())
      }

      addRecipeIngredients(ingredients:Ingredient[]){
        // console.log('wohuu ing addded')
        //   console.log(this.ings)
          this.ings.push(...ingredients)
          this.ingsChanged.next(this.ings.slice())
        //   console.log(this.ings)
      }

      updateIngredient(ind:number,ing:Ingredient){
        // const id=this.ings.map((obj)=>obj.name).indexOf(ing.name)
        this.ings[ind]=ing
        this.ingsChanged.next(this.ings.slice())
      }

      deleteIngredient(ind:number){
        // const id=this.ings.map((obj)=>obj.name).indexOf(ing.name);
        this.ings.splice(ind,1);
        this.ingsChanged.next(this.ings.slice())
      }

    

}