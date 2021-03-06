import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ProdConfig } from './blocks/config/prod.config';
import { JhiAppModule } from './app.module';

ProdConfig();

platformBrowserDynamic()
    .bootstrapModule(JhiAppModule, {
        preserveWhitespaces: true
    })
    .then(success => console.log(`Application started`))
    .catch(err => console.error(err));
