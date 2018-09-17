import { Component, OnInit,OnDestroy, Output, EventEmitter } from '@angular/core';
import {Recipe} from '../recipe.model'
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import {Subscription} from 'rxjs'


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes:Recipe[];
  subs:Subscription;
  // @Output() clickedRecipe=new EventEmitter<Recipe>();
  constructor(private resService:RecipeService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    // this.recipes= [new Recipe('pizza','Pepperoni beef pizza','https://www.cicis.com/media/1176/pizza_trad_pepperonibeef.png'),
    // new Recipe('burger','Beef burger','https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/impossible-burger-1523482169.jpg?crop=1.00xw:0.748xh;0,0.156xh&resize=768:*')];
    // console.log(`recipe name is ${r.name}`)
    console.log('recipe list initialized')
    this.subs=this.resService.recChanged.subscribe((rec:Recipe[])=>this.recipes=rec);
    this.recipes=this.resService.getRecipes();
  }

  // onRecipeClick(rec:Recipe){
  //   this.resService.recEvent.emit(rec);
  //   console.log('recipe is clicked')
  // }

  onNewRecipe(){
    this.router.navigate(['new'], {relativeTo:this.route});
  }
  
  ngOnDestroy(){
    this.subs.unsubscribe();
  }
}
