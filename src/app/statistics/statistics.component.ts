import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card shadow-lg p-4">
      <h2 class="text-center mb-4">Statistics Overview</h2>
      <div class="row">
        <div class="col-md-4">
          <div class="card bg-primary text-white text-center mb-3 p-3">
            <h3>450</h3>
            <p>Colis Livrés</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card bg-success text-white text-center mb-3 p-3">
            <h3>120</h3>
            <p>Inscrits</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card bg-warning text-white text-center mb-3 p-3">
            <h3>1500 DT</h3>
            <p>Gain Mensuel</p>
          </div>
        </div>
      </div>
      <div class="mt-5">
        <h4 class="text-center">Data Distribution</h4>
        <div class="d-flex justify-content-center">
          <canvas #chartCanvas></canvas>
        </div>
      </div>
      <div>
        <p class="text-muted text-center mt-3">Updated: {{ currentDate }}</p>
      </div>
    </div>
  `,
  styles: [`
    .card {
      border: none;
      border-radius: 8px;
    }
    h3 {
      font-size: 2rem;
    }
    p {
      font-size: 1.2rem;
    }
    canvas {
      max-width: 400px;
      margin: auto;
    }
  `]
})
export class StatisticsComponent implements AfterViewInit {
  @ViewChild('chartCanvas') chartCanvas!: ElementRef;
  currentDate = new Date().toLocaleDateString();

  ngAfterViewInit(): void {
    this.createChart();
  }

  createChart(): void {
    const ctx = this.chartCanvas.nativeElement.getContext('2d');
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Delivered Packages', 'Pending Orders', 'New Clients'],
        datasets: [
          {
            data: [450, 35, 120],
            backgroundColor: ['#0d6efd', '#ffc107', '#198754'],
            borderColor: ['#ffffff'],
            borderWidth: 2
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top'
          }
        }
      }
    });
  }
}
