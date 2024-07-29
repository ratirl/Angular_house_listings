import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
// the two below imports are to enable routing in angular for this project
import {provideRouter} from '@angular/router';
import routeConfig from './app/routes';

bootstrapApplication(AppComponent, {
  providers: [ provideRouter(routeConfig)],
}).catch((err) => console.error(err));
