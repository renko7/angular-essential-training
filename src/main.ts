import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

// this boostraps the angular projects so that we can use ng serve
platformBrowserDynamic().bootstrapModule(AppModule);