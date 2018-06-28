import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  login(form: NgForm){
    if(form.valid){
      this.auth.login(form.value.email, form.value.password);
    }
  }

}
