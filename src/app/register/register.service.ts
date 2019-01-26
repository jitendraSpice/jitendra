import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import * as myGlobals from '../GlobalServices/Globals';
import { HttpCustomService } from './../GlobalServices/Http-Custom.service';

@Injectable({
  providedIn: 'root'
})

export class RegisterService {

  constructor(private http: HttpClient,
    private httpCustomService: HttpCustomService) { }

  getRegister(requestJson) {
    let url = myGlobals.serviceDomain + "signup/client/";
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
    return this.httpCustomService.getPostDataWithoutToken(url, requestJson, httpOptions);
  }

}

