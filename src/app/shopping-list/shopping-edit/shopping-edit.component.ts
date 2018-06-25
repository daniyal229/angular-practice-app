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
  @Output() clearSelectedIngredient = new EventEmitter<any>();
  @Input() selectedIngredient;
  @ViewChild('ingredientName') ingredientNameInput;
  @ViewChild('ingredientAmount') ingredientAmountInput;

  constructor() { }

  ngOnInit() {
  }

  removeIngredient() {
    if (!!this.selectedIngredient) {
      this.ingredientRemoved.emit(this.selectedIngredient);
    }
  }

  clear() {
    this.clearSelectedIngredient.emit('');
  }

  addIngredient() {
    if (!!this.ingredientNameInput.nativeElement.value && !!this.ingredientAmountInput.nativeElement.value) {
      const ingredient = new Ingredient(this.ingredientNameInput.nativeElement.value,
        parseInt(this.ingredientAmountInput.nativeElement.value, 10));
      this.ingredientAdded.emit(ingredient);
      this.ingredientNameInput.nativeElement.value = '';
      this.ingredientAmountInput.nativeElement.value = '';
    } else {
      alert('Please fill in ingredient name and amount.');
    }
  }

}
