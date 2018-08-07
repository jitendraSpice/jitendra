import { Component, OnInit } from '@angular/core';
import { reactUser } from "../reactUser";
import { FormGroup,FormControl } from "@angular/forms";

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  userList:reactUser[]=[];
  form:FormGroup;
  addUser(form){
 this.userList.push(form);
 console.log(this.userList.values);
  }
  constructor() { }

  ngOnInit() {
    this.form=new FormGroup({
      name:new FormControl(''),
      company:new FormControl(''),
      contact:new FormControl('')
    })
  }

}
