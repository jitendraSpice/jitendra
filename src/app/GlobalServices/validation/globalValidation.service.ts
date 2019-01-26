import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Injectable()
export class GlobalValidationService {
    passwordValueValidator(control) {
        if (control.value != undefined) {
            let pwd = control.value;
            let letter = /[a-zA-Z]/;
            let number = /[0-9]/;
            let valid = number.test(pwd) && letter.test(pwd);
            // console.log(valid);
            if (!valid) {
                return { 'invalidPassword': true };
            }
        }
        return null;
    }
    emailDomainValidator(control) {
        if (control.value != null && control.value.indexOf("@") >= 0) {
            if (!(control.value.toLowerCase().endsWith('.com') || control.value.toLowerCase().endsWith('.in'))) {
                return { 'invalidDomain': true };
            }
        }
        return null
    }
    mobileNumberValidator(control) {
        let mobile = <string>control.value;
        if (mobile != undefined) {
            if (!(mobile.length == 10 && /^[1-9]+[0-9]*$/.test(mobile) && (mobile.startsWith("9") || mobile.startsWith("6") || mobile.startsWith("7") || mobile.startsWith("8")))) {
                return { 'invalidMobile': true };
            }
        }
        return null;
    }
    validationMessages(formaName, controlName, errorType, msg) {
        let temp = '<div class="alert alert-danger"'
            + ' *ngIf="' + formaName + '.controls[\'' + controlName + '\'].errors?.' + errorType
            + ' &&  (loginForm.controls[\'' + controlName + '\'].touched'
            + ' ||loginForm.controls[\'' + controlName + '\'].dirty)">'
            + msg + '</div>';
        console.log(temp);
        return temp;
    }
}