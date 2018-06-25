import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, AuthenticationService } from '../_services/index';
import { DefaultLayoutComponent } from '../../containers/index';
import { User } from '../_models/index';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;
    returnAdmin: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) { }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';

        this.returnAdmin = this.route.snapshot.queryParams['returnAdmin'] || '/full-layout';
    }

    login() {
        this.loading = true;
        if (this.model.username == 'chownet' && this.model.password == 'aisaturday') {
            this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
                data => {
                    this.router.navigate([this.returnAdmin]);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
            
        } else {
            this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
            
        }
   
       
    }
}
