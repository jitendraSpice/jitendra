import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-example',
  templateUrl: './directive-example.component.html',
  styleUrls: ['./directive-example.component.css']
})
export class DirectiveExampleComponent implements OnInit {
 dcHeroes:string[]=['Batman','super man','wonder woman','flash'];
 index:number=0;
 togleHeroflag:boolean=true;
 
 toglebuttonflag(){
   this.togleHeroflag=!this.togleHeroflag;
 }
  constructor() { }

  ngOnInit() {
  }

}
