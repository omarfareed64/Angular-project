import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-flight-card',
  imports: [CommonModule],
  templateUrl: './flight-card.html',
  styleUrl: './flight-card.css',
})
export class FlightCard {
  @Input() flight: any;

  formatPrice(p: number) {
    if (!p) return '0';
    return p.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
  }

  getAirlineInitials(airline: string): string {
    if (!airline) return 'FL';
    return airline.split(' ').map(word => word[0]).join('').substring(0, 2).toUpperCase();
  }
}
