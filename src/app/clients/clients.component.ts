import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule], // Import CommonModule for *ngFor
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent {
  // Client data
  clients = [
    { name: 'amine', number: 1, specialty: 'Web Design', description: 'Lorem Ipsum Dolor' },
    { name: 'aziz', number: 2, specialty: 'SEO Optimization', description: 'Dolor Sit Amet' },
    { name: 'ilyes', number: 3, specialty: 'Backend Development', description: 'Consectetur Adipiscing' }
  ];

  // Function to delete a client
  deleteClient(clientNumber: number): void {
    this.clients = this.clients.filter(client => client.number !== clientNumber);
  }

  // Function to modify a client (example of modifying name)
  modifyClient(clientNumber: number, newName: string): void {
    const client = this.clients.find(client => client.number === clientNumber);
    if (client) {
      client.name = newName; // Modify the name, but you can modify other properties too
    }
  }
}
