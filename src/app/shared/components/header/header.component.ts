import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { RecipeListService } from '../../services/recipe-list.service';
import { ShoppingListService } from '../../services/shopping-list.service';
import { AuthService } from '../../services/auth.service';
import { SwPush } from '@angular/service-worker';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private http: HttpClient,private swPush: SwPush, private recipeService: RecipeListService, private shoppingList: ShoppingListService, public auth: AuthService) { }

  ngOnInit() {
    
  }

  logout(){
    this.auth.logout();
  }

  fetchData(){
    if(this.auth.isAuthenticated()){
      this.recipeService.fetchRecipes();
      this.shoppingList.fetchIngredients();
    }
  }

  saveData(){
    if(this.auth.isAuthenticated()){
      this.recipeService.saveRecipes();
    }
  }

  subscribeToNotifications() {
    this.swPush.requestSubscription({
      serverPublicKey: environment.vapid_public_key
    }).then(
      success => {
        this.http.post("http://localhost:3000/devices",{subscription: JSON.parse(JSON.stringify(success))}).subscribe(
          success => {
            alert("Success: \n\n Subscription for push notifications has been succesfully processsed.")
          },
          error => {
            alert("Error: \n\n A subscription for push notifications is already present for this device.")
          }
        )
      }
    ).catch(
      err => {
        console.log(err)
      }
    )
  }

}
