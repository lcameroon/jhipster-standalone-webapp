import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IBankAccount } from '../../shared/model/bank-account.model';

@Component({
    selector: 'app-bank-account-detail',
    templateUrl: './bank-account-detail.component.html'
})
export class BankAccountDetailComponent implements OnInit {
    bankAccount: IBankAccount;

    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ bankAccount }) => {
            this.bankAccount = bankAccount;
        });
    }

    previousState() {
        window.history.back();
    }
}
