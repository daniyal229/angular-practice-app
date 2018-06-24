import { Component, OnInit, Output, EventEmitter, ViewChild, Input } from '@angular/core';
import { Ingredient } from '../../models/ingredient.model'


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})

export class ShoppingEditComponent implements OnInit {

  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  @Output() ingredientRemoved = new EventEmitter<Ingredient>();
  @Input() selectedIngredient;
  @ViewChild('ingredientName') ingredientNameInput;
  @ViewChild('ingredientAmount') ingredientAmountInput;

  constructor() { }

  ngOnInit() {
  }

  removeIngredient(){
  	if (!!this.selectedIngredient){
  	   this.ingredientRemoved.emit(this.selectedIngredient);
  	   this.selectedIngredient = '';
  	}
  }

  addIngredient(){
  	if(!!this.ingredientNameInput.nativeElement.value && !!this.ingredientAmountInput.nativeElement.value){
  	   let ingredient = new Ingredient(this.ingredientNameInput.nativeElement.value,parseInt(this.ingredientAmountInput.nativeElement.value));
  	   this.ingredientAdded.emit(ingredient);
  	} else {
  	  alert("Please fill in ingredient name and amount.");
  	}
  }

}
