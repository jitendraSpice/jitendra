import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyA0P52ai0FQSFm23J8S2UzGrbRgzOvhJ8g",
      authDomain: "myfirst-firebase-project-d730b.firebaseapp.com",
    });
  }

}
