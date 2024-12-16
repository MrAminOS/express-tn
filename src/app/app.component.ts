import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; // Import Routes from @angular/router
import { PaymentComponent } from '../app/payment/payment.component'; // Import PaymentComponent
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

// Define the routes
const routes: Routes = [
  { path: 'payment', component: PaymentComponent },  // Route for PaymentComponent
  { path: '', redirectTo: '/parcels', pathMatch: 'full' } // Default route
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule,],  // Import RouterModule and PaymentComponent
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow">
      <div class="container">
        <a class="navbar-brand font-weight-bold" href="#">ExpressTN</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" routerLink="/parcels" routerLinkActive="active">colis</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/payment" routerLinkActive="active">Payment</a> <!-- Only one Payment link -->
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/clients" routerLinkActive="active">Livreur</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/statistics" routerLinkActive="active">Statistics</a>
            </li>
            <!-- Profile Dropdown -->
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="fas fa-user-circle"></i> 
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Account</a></li>
                <li><a class="dropdown-item" href="#">Log Out</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container mt-4">
      <router-outlet></router-outlet> <!-- Router outlet for rendering components -->
    </div>
  `,
  styles: [`
    .navbar-brand {
      font-size: 1.5rem;
      letter-spacing: 1px;
    }
    .nav-link {
      margin-right: 15px;
      transition: color 0.3s;
    }
    .nav-link:hover {
      color: #f8f9fa;
      text-decoration: underline;
    }
    .nav-link.active {
      font-weight: bold;
      border-bottom: 2px solid #ffc107;
    }
    .navbar {
      padding: 10px 20px;
    }
    .container {
      max-width: 1200px;
    }
  `]
})
export class AppComponent {}
