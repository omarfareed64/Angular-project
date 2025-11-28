import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightCard } from "../flight-card/flight-card";

@Component({
  selector: 'app-flights-list',
  imports: [CommonModule, FlightCard],
  templateUrl: './flights-list.html',
  styleUrl: './flights-list.css',
})
export class FlightsList implements OnInit {
  flights: any[] = [];

  ngOnInit(): void {
    // Mock data matching reference design
    this.flights = [
      { 
        airline: 'Delta', 
        from: 'JFK', 
        to: 'LAX', 
        departTime: '07:30', 
        arriveTime: '08:35', 
        duration: '4h 05m', 
        stops: 'Non Stop', 
        price: 4548,
        oldPrice: 5548,
        refundable: 'Partially Refundable'
      },
      { 
        airline: 'American Airlines', 
        from: 'JFK', 
        to: 'LAX', 
        departTime: '09:15', 
        arriveTime: '10:20', 
        duration: '4h 05m', 
        stops: 'Non Stop', 
        price: 4899,
        oldPrice: 5899,
        refundable: 'Fully Refundable'
      },
      { 
        airline: 'Qatar Airways', 
        from: 'JFK', 
        to: 'LAX', 
        departTime: '11:45', 
        arriveTime: '13:50', 
        duration: '4h 05m', 
        stops: '1 Stop', 
        price: 3899,
        oldPrice: 4899,
        refundable: 'Partially Refundable'
      },
      { 
        airline: 'Emirates', 
        from: 'JFK', 
        to: 'LAX', 
        departTime: '14:20', 
        arriveTime: '15:25', 
        duration: '4h 05m', 
        stops: 'Non Stop', 
        price: 5249,
        oldPrice: 6249,
        refundable: 'Fully Refundable'
      },
      { 
        airline: 'United Airlines', 
        from: 'JFK', 
        to: 'LAX', 
        departTime: '16:00', 
        arriveTime: '17:05', 
        duration: '4h 05m', 
        stops: 'Non Stop', 
        price: 4199,
        oldPrice: 5199,
        refundable: 'Partially Refundable'
      },
      { 
        airline: 'British Airways', 
        from: 'JFK', 
        to: 'LAX', 
        departTime: '18:30', 
        arriveTime: '19:35', 
        duration: '4h 05m', 
        stops: 'Non Stop', 
        price: 4699,
        oldPrice: 5699,
        refundable: 'Fully Refundable'
      }
    ];
  }
}
