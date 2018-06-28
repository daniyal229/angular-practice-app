import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Recipe } from '../../models/recipe.model';
import { RecipeListService } from '../../services/recipe-list.service';
import $ from 'jquery';
import { Response } from '@angular/http';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})

export class RecipeEditComponent implements OnInit {

  @ViewChild('recipeForm') recipeForm: NgForm;

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
       this.recipe = new Recipe(Math.floor((Math.random() * 100000) + 1),'','','',[]);
    }
  }

  addOrUpdateRecipe(recipeForm: NgForm){
    let recipe = recipeForm.value.recipe
    this.RecipeListService.addRecipe(new Recipe(recipe.id, recipe.name, recipe.description, recipe.imageSrc)).subscribe(
      (response: Response) => {
        console.log("Recipe has been added");
      }
    );
  }
}
