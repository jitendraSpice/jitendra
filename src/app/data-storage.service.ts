import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http:Http) { }
  StoreData(data){
   return this.http.put('https://myfirst-firebase-project-d730b.firebaseio.com/user.json',data);
  }
  getdata(){
    return this.http.get('https://myfirst-firebase-project-d730b.firebaseio.com/user.json');
  }
}
