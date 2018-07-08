import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ILabel } from '../../shared/model/label.model';

@Component({
    selector: 'app-label-detail',
    templateUrl: './label-detail.component.html'
})
export class LabelDetailComponent implements OnInit {
    label: ILabel;

    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ label }) => {
            this.label = label;
        });
    }

    previousState() {
        window.history.back();
    }
}
