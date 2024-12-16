import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatCalendar, MatCalendarCellClassFunction } from '@angular/material/datepicker';

@Component({
  selector: 'app-parcels',
  standalone: true,
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule
  ],
  templateUrl: './parcels.component.html',
  styleUrls: ['./parcels.component.css']
})
export class ParcelsComponent {
  parcels = [
    { num: 1234, clientName: 'Amani', profilePicture: 'https://via.placeholder.com/40', statusIcon: 'bi bi-check-circle text-success', deliveryDate: new Date('2024-12-18') },
    { num: 5678, clientName: 'mahmoud', profilePicture: 'https://via.placeholder.com/40', statusIcon: 'bi bi-hourglass-split text-warning', deliveryDate: new Date('2024-12-19') },
    { num: 9101, clientName: 'fathi', profilePicture: 'https://via.placeholder.com/40', statusIcon: 'bi bi-exclamation-circle text-danger', deliveryDate: new Date('2024-12-18') }
  ];

  selectedDate: Date = new Date();

  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    if (view === 'month') {
      const deliveryDates = this.parcels.map(p => p.deliveryDate.toDateString());
      return deliveryDates.includes(cellDate.toDateString()) ? 'delivery-date' : '';
    }
    return '';
  };

  get deliveriesForSelectedDate() {
    return this.parcels.filter(parcel =>
      parcel.deliveryDate.toDateString() === this.selectedDate.toDateString()
    );
  }

  setSelectedDate(date: Date | null) {
    if (date) {
      this.selectedDate = date;
    }
  }
}
