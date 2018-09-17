import {Component,EventEmitter,Output} from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import {Recipe} from '../recipes/recipe.model'
import { AuthService } from '../auth/auth.service';



@Component({
    selector:'app-header',
    templateUrl:'./header.component.html',
    styleUrls:['./header.component.css']

})

export class HeaderComponent {
// @Output() myEvent=new EventEmitter<boolean>();
rec:Recipe[];

constructor(private recService:RecipeService,private authServ:AuthService){}

// onRecipeClick(){
//     this.myEvent.emit(true);
// }

// onShoppingClick(){
//     this.myEvent.emit(false);
// }

onSaveRecipes(){
	this.rec=this.recService.getRecipes();
	// console.log(this.rec)
	this.recService.saveRecipesToServer(this.rec).subscribe((resp)=>console.log(resp),(err)=>console.log(err))	
}
onFetchRecipes(){
	this.recService.FetchRecipesFromServer().subscribe((recipes:Recipe[])=>this.recService.setRecipes(recipes))
}

onLogOut(){
	this.authServ.logOut();
}
}