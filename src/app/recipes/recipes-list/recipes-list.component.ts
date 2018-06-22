import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../models/recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe("Biryani","A dish of meat and rice","https://myheartbeets.com/wp-content/uploads/2018/02/instant-pot-chicken-biryani-pressure-cooker-indian.jpg"),
    new Recipe("Biryani","A dish of meat and rice","https://myheartbeets.com/wp-content/uploads/2018/02/instant-pot-chicken-biryani-pressure-cooker-indian.jpg"),
    new Recipe("Biryani","A dish of meat and rice","https://myheartbeets.com/wp-content/uploads/2018/02/instant-pot-chicken-biryani-pressure-cooker-indian.jpg"),
    new Recipe("Biryani","A dish of meat and rice","https://myheartbeets.com/wp-content/uploads/2018/02/instant-pot-chicken-biryani-pressure-cooker-indian.jpg"),
    new Recipe("Biryani","A dish of meat and rice","https://myheartbeets.com/wp-content/uploads/2018/02/instant-pot-chicken-biryani-pressure-cooker-indian.jpg"),
    new Recipe("Biryani","A dish of meat and rice","https://myheartbeets.com/wp-content/uploads/2018/02/instant-pot-chicken-biryani-pressure-cooker-indian.jpg"),
    new Recipe("Biryani","A dish of meat and rice","https://myheartbeets.com/wp-content/uploads/2018/02/instant-pot-chicken-biryani-pressure-cooker-indian.jpg"),
  ];

  constructor() { }

  ngOnInit() {
  }

}
