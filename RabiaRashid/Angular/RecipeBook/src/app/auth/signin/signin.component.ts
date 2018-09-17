import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authService:AuthService) { }
  msg:string;
  ngOnInit() {
  }
  onSignIn(form:NgForm){
    this.authService.signInUser(form.value.email,form.value.password)
    this.authService.err.subscribe((msg)=>{console.log(msg);this.msg=msg;});
  }
}
