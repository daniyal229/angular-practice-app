import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../models/recipe.model';
import { ShoppingListService } from '../../services/shopping-list.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { RecipeListService } from '../../services/recipe-list.service';
import { Ingredient } from '../../models/ingredient.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe: any = '';
  id: number;

  constructor(public shoppingList: ShoppingListService, private recipeService: RecipeListService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.recipeService.getRecipe(this.id).subscribe(
            (recipe: any) => {
              this.recipe = new Recipe(recipe.id, recipe.name, recipe.description);
              for(let ingredient of recipe.ingredients){
                this.recipe.ingredients.push(new Ingredient(ingredient.id, ingredient.name, ingredient.amount, ingredient.imageSrc));
              }
            }
          );
        }
      );
  }

  removeRecipe(recipe_id: number) {
    if (confirm("Are you sure you want to remove recipe?")) {
      this.recipeService.removeRecipe(recipe_id);
      this.router.navigate(['/recipes']);
    }
  }

}
