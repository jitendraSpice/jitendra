import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpErrorResponse, HttpHandler, HttpResponse } from '@angular/common/http';
import { finalize, tap } from 'rxjs/operators';
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class MyInterceptor implements HttpInterceptor {
    constructor(private router: Router,
        private toastr: ToastrService,
        ) {}
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const startTime = Date.now();
        let status: string;

        return next.handle(req).pipe(
            tap(
                event => {
                    status = '';
                    if (event instanceof HttpResponse) {
                        status = 'succeeded';
                        this.parseHttpCodeBasedRouting(event);
                    }
                },
                error => {
                    status = 'failed'
                    if (error instanceof HttpErrorResponse) {
                        this.parseHttpCodeBasedRouting(error);
                    }
                }
            ),
            finalize(() => {
                const elapsedTime = Date.now() - startTime;
                const message = req.method + " " + req.urlWithParams + " " + status
                    + " in " + elapsedTime + "ms";
                this.logDetails(message);
            })
        );
    }
    private logDetails(msg: string) {
        console.log(msg);
    }
    private parseHttpCodeBasedRouting(resp) {
       if (resp.status === 401 || resp.status === 0) {
            this.getWaringMessage("Either your session has been expired or trying to access unauthorized page");
            this.router.navigate(['/Logout']);
            return;
        }
        if (resp.status === 403) {
            return;
        }
    }
    getWaringMessage(msg) {
        this.toastr.warning(msg, 'Waring');
      }
}
