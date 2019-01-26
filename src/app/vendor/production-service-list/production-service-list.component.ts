import { Component, OnInit } from '@angular/core';
import { TreeviewItem, TreeviewConfig } from '../../../lib'

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FormGroup } from '@angular/forms/src/model';
import { GrdFilterPipe } from '../../GlobalServices/filter/grd-filter.pipe';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductionServicelistService } from 'src/app/vendor/production-service-list/production-service-list.service';

@Component({
  selector: 'app-servicelist',
  templateUrl: './production-service-list.component.html',
  styleUrls: ['./production-service-list.component.css']
})
export class ProductionServiceListComponent implements OnInit {
    data : any;

  serviceList : any[];
  stagingServiceForm : FormGroup
  productionServiceList  :any;
  constructor(
      private service: ProductionServicelistService, 
      private fb: FormBuilder,
      private router  :Router,
      private modalService: NgbModal
  ) { }

  ngOnInit() {
      this.getServiceDetails();
      this.createForm();
    }
      
    createForm() {
      this.stagingServiceForm = this.fb.group({
        'SearchText': ['']
      });
    }

  onFilterChange(value: string) {
      console.log('filter:', value);
  }

  getServiceDetails(){
    this.productionServiceList=[];
  let deptName = localStorage.getItem('productionDeptName');
  this.service.getServiceDetail(deptName).subscribe(response =>{
      this.data = response;
      this.serviceList=this.data.data;
      for(let i=0;i<this.serviceList.length;i++){
        if(this.serviceList[i].proSubId != null){
          this.productionServiceList.push(this.serviceList[i]);
        }
      }
      console.log(this.productionServiceList);
  });
  }

  getImagePath(item) {
    let path = item.name.toLowerCase();
    return "assets/images/nsp.png";

  }

  RaisedApiIssue() {
    this.router.navigate(['/vendor/dashboard/raiseApi']);

  }
  RequestProductionApi() {
    this.router.navigate(['/vendor/dashboard/productionApi']);

  }

  serviceCost: any[];
  viewServiceCost : any;
  viewApiCost(deptName){
    
    this.service.getApiCost(deptName).subscribe(response =>{
    this.viewServiceCost = response;
    this.serviceCost = this.viewServiceCost.data;
       
    });
      }
    
      open(content) {
           this.viewApiCost(localStorage.getItem('productionDeptName'));
          this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
        }
        
}