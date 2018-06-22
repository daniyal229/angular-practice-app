import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient("Tomatoes", 3, "assets/tomato.png"),
    new Ingredient("Onions", 3,"assets/onion.png"),
    new Ingredient("Peanuts", 3,"assets/peanut.png")
  ];

  constructor() { }

  ngOnInit() {
  }

}
