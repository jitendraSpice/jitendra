import { Component, OnInit } from '@angular/core';
import { user } from '../user'
import {DataStorageService } from '../data-storage.service';
import { Response } from '@angular/http';
@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {
    userList:user[]=[];

  AddUser(frm){
    var user=user;
    user=frm.value;
    this.userList.push(user);
    var userobj:any={};
    userobj.user=frm.value.name;
    userobj.Contact=frm.value.Contact;
    userobj.usemailer=frm.value.email;
    //console.log(userobj);
    this.dataStrogeService.StoreData(userobj).subscribe(
     ( Response:Response)=>console.log(Response)
    );
    
  }
  getsaveddata(){
   this.dataStrogeService.getdata().subscribe(
     (Response:Response)=>{
       const gotdata=Response.json();
       console.log(gotdata);
     }
   );
  }
  constructor(private dataStrogeService:DataStorageService) { }

  ngOnInit() {
    
  }

}
