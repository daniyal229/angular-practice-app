import { Component, OnInit, Input, Injectable } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ShoppingService } from '../../shopping-list/shopping.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Injectable()
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
// @Input() recipe:Recipe;
recipe:Recipe;
index:number;

  constructor(private recService:RecipeService, private shopService:ShoppingService,private router:Router ,private route:ActivatedRoute) {console.log(this.recipe) }

  ngOnInit() {
    // this.recService.recEvent.subscribe((rec)=>{
    //   console.log('detail is initialized')
    //   console.log('sff'+rec);
    //   this.recipe=rec;
    // });
    this.route.params.subscribe((params:Params)=>{
      this.index=+params['id'],console.log('paramsss check'+this.index);
      this.recipe=this.recService.getRecipeByIndex(this.index);
    });


  }

  toShoppingList(){
    // this.recService.ingToShoppingListEvent.emit(this.recipe.ings)
    console.log('clickeeed')
    this.shopService.addRecipeIngredients(this.recipe.ings);
    this.router.navigate(['/shopping']);
  }
  navToRecipeEdit(){
    this.router.navigate(['edit'],{relativeTo:this.route})

  }
  onDeleteRecipe(){
    this.recService.deleteRecipe(this.index)
    this.router.navigate(['../'],{relativeTo:this.route})
  }
}
