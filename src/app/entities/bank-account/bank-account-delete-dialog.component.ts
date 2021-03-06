import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {
    NgbActiveModal,
    NgbModal,
    NgbModalRef
} from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from '../../../lib/ng-jhipster';

import { IBankAccount } from '../../shared/model/bank-account.model';
import { BankAccountService } from './bank-account.service';

@Component({
    selector: 'app-bank-account-delete-dialog',
    templateUrl: './bank-account-delete-dialog.component.html'
})
export class BankAccountDeleteDialogComponent {
    bankAccount: IBankAccount;

    constructor(
        private bankAccountService: BankAccountService,
        public activeModal: NgbActiveModal,
        private eventManager: JhiEventManager
    ) {}

    clear() {
        this.activeModal.dismiss('cancel');
    }

    confirmDelete(id: number) {
        this.bankAccountService.delete(id).subscribe(response => {
            this.eventManager.broadcast({
                name: 'bankAccountListModification',
                content: 'Deleted an bankAccount'
            });
            this.activeModal.dismiss(true);
        });
    }
}

@Component({
    selector: 'app-bank-account-delete-popup',
    template: ''
})
export class BankAccountDeletePopupComponent implements OnInit, OnDestroy {
    private ngbModalRef: NgbModalRef;

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private modalService: NgbModal
    ) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ bankAccount }) => {
            setTimeout(() => {
                this.ngbModalRef = this.modalService.open(
                    BankAccountDeleteDialogComponent as Component,
                    {
                        size: 'lg',
                        backdrop: 'static'
                    }
                );
                this.ngbModalRef.componentInstance.bankAccount = bankAccount;
                this.ngbModalRef.result.then(
                    result => {
                        this.router.navigate([{ outlets: { popup: null } }], {
                            replaceUrl: true,
                            queryParamsHandling: 'merge'
                        });
                        this.ngbModalRef = null;
                    },
                    reason => {
                        this.router.navigate([{ outlets: { popup: null } }], {
                            replaceUrl: true,
                            queryParamsHandling: 'merge'
                        });
                        this.ngbModalRef = null;
                    }
                );
            }, 0);
        });
    }

    ngOnDestroy() {
        this.ngbModalRef = null;
    }
}
