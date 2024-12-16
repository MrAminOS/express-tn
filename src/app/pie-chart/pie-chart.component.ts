import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-pie-chart',
  standalone: true,
  template: `
    <div class="card mt-4 p-5 bg-light text-center">
      <canvas #pieCanvas></canvas>
    </div>
  `,
  styles: [
    `
      canvas {
        max-width: 400px;
        margin: auto;
      }
    `
  ]
})
export class PieChartComponent implements AfterViewInit {
  @ViewChild('pieCanvas') pieCanvas!: ElementRef;

  ngAfterViewInit(): void {
    this.createPieChart();
  }

  createPieChart(): void {
    const ctx = this.pieCanvas.nativeElement.getContext('2d');
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Delivered Packages', 'Pending Orders', 'New Clients'],
        datasets: [
          {
            data: [450, 35, 120],
            backgroundColor: ['#dc3545', '#ffc107', '#17a2b8'],
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
