import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { JhiBankAccountModule } from './bank-account/bank-account.module';
import { JhiLabelModule } from './label/label.module';
import { JhiOperationModule } from './operation/operation.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        JhiBankAccountModule,
        JhiLabelModule,
        JhiOperationModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhiEntityModule {}
