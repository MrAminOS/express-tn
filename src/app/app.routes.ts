import { Routes } from '@angular/router';
import { ParcelsComponent } from './parcels/parcels.component';
import { ClientsComponent } from './clients/clients.component';
import { StatisticsComponent } from './statistics/statistics.component';
import {PaymentComponent} from './payment/payment.component';
import {LoginComponent} from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms'; // Import FormsModule






export const routes: Routes = [
  { path: 'parcels', component: ParcelsComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'statistics', component: StatisticsComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Register', component: RegisterComponent },




  { path: '', redirectTo: 'parcels', pathMatch: 'full' } // Default route
];
