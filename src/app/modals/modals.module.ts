import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,NgbModule,FormsModule, ReactiveFormsModule 
  ],
  declarations: [ForgetPasswordComponent],
  exports: [ForgetPasswordComponent]
})
export class ModalsModule { }
