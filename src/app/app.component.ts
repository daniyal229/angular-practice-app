import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   recipesVisible = true;

   showRecipes(data: any) {
   	  this.recipesVisible = true;
   }

   showShoppingList(data: any) {
   	  this.recipesVisible = false;
   }

}
