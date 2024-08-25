import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  (function() {
    if (typeof global === 'undefined') {
        (window as any).global = window;
    }
})();

