import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Authservice} from '../auth-service'
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authservice:Authservice) { }

  ngOnInit() {
  }
  onSignin(from:NgForm){
const email=from.value.email;
const password=from.value.password;
this.authservice.signinUser(email,password);
  }

}
