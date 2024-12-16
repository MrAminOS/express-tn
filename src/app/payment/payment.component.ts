import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  // Import FormsModule for ngModel

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule, FormsModule],  // Add FormsModule to imports
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  paymentMethods = ['Credit Card', 'PayPal', 'Bank Transfer'];
  selectedMethod = this.paymentMethods[0];
  
  handlePayment() {
    alert(`Payment via ${this.selectedMethod} processed successfully!`);
  }
}
