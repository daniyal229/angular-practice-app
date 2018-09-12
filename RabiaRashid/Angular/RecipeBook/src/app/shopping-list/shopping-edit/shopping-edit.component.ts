import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingService } from '../shopping.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
// @ViewChild('nameInput') recName:ElementRef;
// @ViewChild('amountInput') recAmount:ElementRef;
// @Output() ingEvent=new EventEmitter<Ingredient>();
@ViewChild('f') ingForm:NgForm;
editMode:boolean=false;
editedItemIndex:number;
  constructor(private shService:ShoppingService) { }

  ngOnInit() {
    this.shService.startedEditing.subscribe((ind:number)=>{
      this.editedItemIndex=ind;
      this.editMode=true;
      this.ingForm.setValue({
        ingName: this.shService.getIngredients()[ind].name,
        ingAmount: this.shService.getIngredients()[ind].amount
      })
    });
  }
  onSubmit(form:NgForm){
    // console.log(this.recName.nativeElement.value);
    // this.ingEvent.emit({
    //   name:this.recName.nativeElement.value,
    //   amount:this.recAmount.nativeElement.value
    // })
    // this.shService.addIngredients({
    //   name:this.recName.nativeElement.value,
    //   amount:this.recAmount.nativeElement.value
    // })
    if(!this.editMode){
      this.shService.addIngredients({
      name: this.ingForm.value.ingName,
      amount: this.ingForm.value.ingAmount
    })
    }
    else{
      this.shService.updateIngredient(this.editedItemIndex,new Ingredient(this.ingForm.value.ingName, this.ingForm.value.ingAmount));
      this.editMode=false;
    }
    this.ingForm.reset();
  }

  onClear(){
    this.ingForm.reset();
    this.editMode=false;
  }

  onDelete(){
    this.shService.deleteIngredient(this.editedItemIndex)
    this.ingForm.reset();
    this.editMode=false;
  }
}
