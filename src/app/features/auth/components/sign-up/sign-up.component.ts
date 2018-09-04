import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../../../shared/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  register(form: NgForm) {
    if(form.valid){
      this.auth.signUpUser(form.value.email, form.value.password);
    }
  }

}
