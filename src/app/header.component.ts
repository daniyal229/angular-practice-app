import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() displayRecipes = new EventEmitter<any>()
  @Output() displayShoppingList = new EventEmitter<any>()
  @Input() recipesVisible: boolean;
  
  constructor() { }

  ngOnInit() {
  }

  onDisplayRecipes(){
  	debugger;
  	this.displayRecipes.emit('');
  }

  onDisplayShoppingList() {
  	this.displayShoppingList.emit('');
  }

}
