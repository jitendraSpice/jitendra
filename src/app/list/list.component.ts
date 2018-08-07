import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers:[DataService]
})
export class ListComponent implements OnInit {
  itemReceived:string[]=[''];

  getitemsfromServiceclass(){
    this.itemReceived=this.dataService.getItems();//To do letter
  }
  addNewItem(form:any){
  console.log(form.value.itemName);
    this.dataService.addItem(form.value.itemName);
  }
  deleteItem(selectedItem){
    this.dataService.deleteItem(selectedItem);
    console.log("hii",selectedItem);
  }
  constructor(private dataService:DataService) { }

  ngOnInit() {
  }

}
