import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  // showRecipe:boolean;
  // getHeaderData(eventData:boolean){
  //   this.showRecipe=eventData;

  // }

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyAjraaMuC2TzOdbOWo675MaNKmn6MkFZIM",
      authDomain: "ng-recipe-book-2345d.firebaseapp.com",
    })
  }
}
