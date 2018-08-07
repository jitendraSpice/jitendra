import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Authservice} from '../auth-service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authservice:Authservice) { }

  ngOnInit() {
  }
  onSignUp(from: NgForm){
 const email=from.value.email;
 const password=from.value.password;
  console.log(from.value.email,password); 
 this.authservice.signUpUser(email,password);
}

}
