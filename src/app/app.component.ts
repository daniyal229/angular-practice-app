import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from './shared/services/shopping-list.service';
import { RecipeListService } from './shared/services/recipe-list.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ShoppingListService, RecipeListService]
})
export class AppComponent implements OnInit{

   constructor(public shoppingList: ShoppingListService, public recipeList: RecipeListService) { }

   recipesVisible = true;

   showRecipes(data: any) {
    this.recipesVisible = true;
   }

   showShoppingList(data: any) {
    this.recipesVisible = false;
   }

   ngOnInit() {
      firebase.initializeApp({
        apiKey: "AIzaSyAxt3jDkrymncrvb_qZRfZ-nrec-r1cPXg",
        authDomain: "recipebook-3e9c5.firebaseapp.com",
        databaseURL: "https://recipebook-3e9c5.firebaseio.com",
        projectId: "recipebook-3e9c5",
        storageBucket: "recipebook-3e9c5.appspot.com",
        messagingSenderId: "775665832050"
      })
   }

}
