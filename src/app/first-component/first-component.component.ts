import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
   headingTwo:string="My first component is working"
   returnString(){
     return "jitu singh making first components"
   }
   imageUrl:string="../../assets/edureka-logo.png";
   changeHeading(){
     this.headingTwo="heading two has benn changed"
   }
  constructor() { }

  ngOnInit() {
  }

}
