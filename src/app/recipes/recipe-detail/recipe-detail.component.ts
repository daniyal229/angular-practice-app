import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../models/recipe.model';
import { ShoppingListService } from '../../services/shopping-list.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { RecipeListService } from '../../services/recipe-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe;
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
          this.recipe = this.recipeService.getRecipe(this.id);
        }
      );
    this.recipeService.ingredientAddedToRecipe.asObservable().subscribe(
      (recipe: Recipe) => {
        this.recipe = recipe;
      }
    ) 
  }

  removeRecipe(recipe_id: number) {
    if (confirm("Are you sure you want to remove recipe?")) {
      this.recipeService.removeRecipe(recipe_id);
      this.router.navigate(['/recipes']);
    }
  }

}
