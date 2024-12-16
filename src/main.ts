import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from '../src/app/app.routes';
import { ParcelsComponent } from '../src/app/parcels/parcels.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)] // Attach the routes here
}).catch(err => console.error(err));
bootstrapApplication(ParcelsComponent, {
  providers: [BrowserAnimationsModule]
});
