import { Component ,ViewChild ,ElementRef} from '@angular/core';

@Component({
  selector: 'app-top-cities',
  imports: [],
  templateUrl: './top-cities.html',
  styleUrl: './top-cities.css',
})
export class TopCities {
   @ViewChild('slider', { static: false }) slider!: ElementRef;

  cities = [
    { id: 1, name: 'Paris', country: 'France', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&h=500&fit=crop' },
    { id: 2, name: 'Dubai', country: 'UAE', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=500&fit=crop' },
    { id: 3, name: 'Rome', country: 'Italy', image: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=400&h=500&fit=crop' },
    { id: 4, name: 'New York', country: 'USA', image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400&h=500&fit=crop' },
    { id: 5, name: 'Tokyo', country: 'Japan', image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&h=500&fit=crop' },
  ];

  scrollLeft() {
    this.slider.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
  }

  scrollRight() {
    this.slider.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
  }
}