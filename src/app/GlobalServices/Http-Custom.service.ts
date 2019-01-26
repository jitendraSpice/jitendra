import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, } from '@angular/common/http';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

import * as myGlobals from './Globals';
@Injectable({
  providedIn: 'root'
})
export class HttpCustomService {
  constructor(private http: HttpClient,
    private toastr: ToastrService) { }

  getRequest(url) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('access_token')
      })
    }
    return this.http.get(url, httpOptions).pipe(
      retry(0), map(data => {
        return <ResponseInterface[]>data;
      }),
      catchError(error => {
        return Observable.throw('Something went wrong');
      })
    );
  }

  getPostDataWithoutToken(url, requestJson, httpOptionsWithToken) {
    return this.http.post(url, requestJson, httpOptionsWithToken).pipe(
      retry(0), map(data => {
        return data;
      
      }),
      catchError(error => {
        return Observable.throw('Something went wrong');
      })
    );
  }
 
  getPostData(url, requestJson) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('access_token')
      })
    }
 
   return this.http.post(url, requestJson, httpOptions).pipe(
      retry(0), map(data => {
        return <ResponseInterface[]>data;
      }),
      catchError(error => {
        return Observable.throw('Something went wrong');
      })
    );
  }

  delete(url) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('access_token')
      })
    }
    return this.http.delete(url, httpOptions).pipe(
      retry(0), map(data => {
        return <ResponseInterface[]>data;
      }),
      catchError(error => {
        return Observable.throw('Something went wrong');
      })
    );
  }
}

export interface ResponseInterface {
  "statusInfo": string;
  "data": any[];
}