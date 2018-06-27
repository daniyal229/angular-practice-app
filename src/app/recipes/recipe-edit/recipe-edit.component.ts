import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Recipe } from '../../models/recipe.model';
import { RecipeListService } from '../../services/recipe-list.service';
import $ from 'jquery';

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
    debugger
    this.isNewRecipe = (this.route.snapshot.routeConfig.path === 'new');
    if (!!!this.isNewRecipe) {
      this.route.params.subscribe(
        (params: Params) => {
          this.recipe = this.RecipeListService.getRecipe(+params['id']);
          this.recipeForm.value.recipe = this.recipe;
        }
      );
    } else {
       this.recipe = new Recipe(Math.floor((Math.random() * 100000) + 1),'','','',[]);
    }
  }

  addOrUpdateRecipe(recipeForm: NgForm){
    debugger
  }
}
