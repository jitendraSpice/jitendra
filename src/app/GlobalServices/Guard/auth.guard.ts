import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from
  '@angular/router';
import { Observable, Subject, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router,
    private toastr: ToastrService,
  ) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (localStorage.getItem('access_token')) {
      return true;
    }
    this.getWaringMessage("Either your session has been expired or trying to access unauthorized page");
    this.router.navigate(['/Logout']);
    return false;
  }
  getWaringMessage(msg) {
    this.toastr.warning(msg, 'Waring');
  }
}
