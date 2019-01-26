import { Injectable } from '@angular/core';
import { TreeviewItem } from '../../../lib';
import { HttpCustomService } from 'src/app/GlobalServices/Http-Custom.service';
import * as myGlobals from './../../GlobalServices/Globals';
@Injectable({
    providedIn: 'root'
})
export class ProductionServicelistService {
   
    constructor(private http: HttpCustomService) { }
 
    getServiceDetail(deptName){
        let url = myGlobals.serviceDomain + "client/assign/service/" + deptName;
              return this.http.getRequest(url);
      }
      
      getApiCost(deptName) {
        let url = myGlobals.serviceDomain + "client/assign/service/price/" + deptName;
        return this.http.getRequest(url);
    }
}