import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  items:string[]=['butter','milk','cake','salt'];
  getItems(){
    return this.items;
  }
  addItem(newItem){
    this.items.push(newItem);
    return this.items;
  }
  deleteItem(delitem){
   
   this.items.splice(delitem);
  // return this.items;
  }

  constructor() { }
}
