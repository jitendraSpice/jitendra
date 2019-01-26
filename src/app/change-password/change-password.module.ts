import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangePasswordComponent } from './change-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: ChangePasswordComponent,
  },
];
@NgModule({
  imports: [
    CommonModule, 
    FormsModule, ReactiveFormsModule,RouterModule.forChild(routes),
  ],
  exports: [ChangePasswordComponent],
  declarations: [ChangePasswordComponent]
})
export class ChangePasswordModule { }
//  { path: 'changePassword', component: ChangePasswordComponent },
