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
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }
}
