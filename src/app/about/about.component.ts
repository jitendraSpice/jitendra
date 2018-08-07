import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  name:string='';
  alldata:any=[];
  constructor(private HttpClient:HttpClient) {  }
  onNameKeyUp(event:any){
    this.name=event.target.value;
  }
  getprofile(){
  this.HttpClient.get('https://my-json-server.typicode.com/techsithgit/json-faker-directory/profiles')
  .subscribe(
    (data:any[])=>{
      this.alldata=data;
     console.log(data);
    }
  )
  }
  postprofile(){
    this.HttpClient.post('https://my-json-server.typicode.com/techsithgit/json-faker-directory/profiles',{
      name:"jitendra",
      age:21
    })
    .subscribe(
      (data:any)=>{
       console.log(data);
      }
    )
    }

  ngOnInit() {
  }

}
