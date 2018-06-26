import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Recipe } from '../../models/recipe.model';
import { RecipeListService } from '../../services/recipe-list.service';
import $ from 'jquery';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})

export class RecipeEditComponent implements OnInit {

  isNewRecipe: boolean = false;
  recipe: Recipe;
  constructor(private route: ActivatedRoute, private RecipeListService: RecipeListService) { }

  ngOnInit() {
    this.isNewRecipe = (this.route.snapshot.routeConfig.path === 'new');
    if (!!!this.isNewRecipe) {
      this.route.params.subscribe(
        (params: Params) => {
          this.recipe = $.extend({},this.RecipeListService.getRecipe(+params['id']));
        }
      );
    } else {
       this.recipe = new Recipe(Math.floor((Math.random() * 100000) + 1);,'','','',[]);
    }
  }

  addOrUpdateRecipe(recipe){
    this.RecipeListService.addRecipe(recipe);
  }
}
