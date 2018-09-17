import { Component, OnInit, OnChanges, DoCheck, OnDestroy } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model'
import { ShoppingService } from './shopping.service';
import { RecipeService } from '../recipes/recipe.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  // providers:[ShoppingService]
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ings:Ingredient[];
  subs:Subscription;
  constructor(private ingService:ShoppingService, private recService:RecipeService) { 
}
  ngOnInit() {
      // this.ings=[
  //   new Ingredient('Apples',5),
  //   new Ingredient('Tomatoes',10)
  // ] 
  this.ings=this.ingService.getIngredients();
  // this.recService.ingToShoppingListEvent.subscribe((ingredients:Ingredient[])=>{
  //   console.log('tada i have listened the event')
  //   this.ingService.addRecipeIngredients(ingredients);
  // });
  // console.log(this.ings)
  // this.recService.ingToShoppingListEvent.subscribe((ingredients:Ingredient[])=>{this.ings=ingredients;console.log('blabls'+this.ings)});
  this.subs=this.ingService.ingsChanged.subscribe((ingArray:Ingredient[])=>{this.ings=ingArray;console.log(this.ings)});
    
  }

  ngOnDestroy(){
    this.subs.unsubscribe();
  }
  onIngrClick(index:number){
    this.ingService.startedEditing.next(index);
  }
  // ngDoCheck(){
  //   console.log('asas'+this.ings);
  // }

}
