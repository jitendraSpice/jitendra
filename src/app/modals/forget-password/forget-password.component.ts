import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ForgetPasswordService } from 'src/app/modals/forget-password/forget-password.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  forgetPasswordForm: FormGroup;

  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.forgetPasswordForm = this.formBuilder.group({
      'email':
        [null, [Validators.required, Validators.minLength(4),
        Validators.maxLength(80), Validators.email, this.emailDomainValidator]]
    });

  }
  emailDomainValidator(control) {
    if (control.value != null && control.value.indexOf("@") >= 0) {
      if (!(control.value.toLowerCase().endsWith('.com') || control.value.toLowerCase().endsWith('.in'))) {
        return { 'invalidDomain': true };
      }
    }
    return null
  }


  closeResult: string;
  lodingFlag: boolean = false;
  constructor(private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private forgotPasswordService: ForgetPasswordService
  ) { }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  save() {
    this.lodingFlag = true;
    let emailId = this.forgetPasswordForm.get('email').value;

    this.forgotPasswordService.forgetPassword(emailId)
      .subscribe(
        response => {
          this.lodingFlag = false;
          this.getResponseParser(response);
        },
        error => {
          this.lodingFlag = false;
          this.getErrorMessage('your request can not processed at this moment');
        });
    this.forgetPasswordForm.reset();
  }

  getErrorMessage(msg) {
    this.toastr.error(msg, 'Error');
  }
  getWaringMessage(msg) {
    this.toastr.warning(msg, 'Waring');
  }
  getResponseParser(resp) {
    if (resp.statusInfo.status === 'f' || resp.statusInfo.status === 'F') {
      this.getWaringMessage(resp.statusInfo.errorDescription);
      return;
    }
    if (resp.statusInfo.status === 's' || resp.statusInfo.status === 'S') {
      this.getSuccessMessage('Your Password has been sent your mail id');
    }
  }
  getSuccessMessage(msg) {
    this.toastr.success(msg, 'Success');
  }

  submitFrom() { }
}