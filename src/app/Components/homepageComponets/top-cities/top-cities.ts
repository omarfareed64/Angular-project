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
    { id: 1, name: 'Paris', country: 'France', image: '/assets/cities/paris.jpg' },
    { id: 2, name: 'Dubai', country: 'UAE', image: '/assets/cities/dubai.jpg' },
    { id: 3, name: 'Rome', country: 'Italy', image: '/assets/cities/rome.jpg' },
    { id: 4, name: 'New York', country: 'USA', image: '/assets/cities/newyork.jpg' },
    { id: 5, name: 'Tokyo', country: 'Japan', image: '/assets/cities/tokyo.jpg' },
  ];

  scrollLeft() {
    this.slider.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
  }

  scrollRight() {
    this.slider.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
  }
}