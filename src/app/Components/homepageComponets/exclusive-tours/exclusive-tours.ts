import { Component,ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-exclusive-tours',
  imports: [],
  templateUrl: './exclusive-tours.html',
  styleUrl: './exclusive-tours.css',
})
export class ExclusiveTours {
  @ViewChild('slider', { static: false }) slider!: ElementRef;

  tours = [
    { id: 1, name: 'Santorini Sunset Cruise', location: 'Greece', price: '$250', image: '/assets/tours/santorini.jpg' },
    { id: 2, name: 'Desert Safari Adventure', location: 'Dubai, UAE', price: '$180', image: '/assets/tours/desert.jpg' },
    { id: 3, name: 'Rome Ancient Wonders', location: 'Italy', price: '$200', image: '/assets/tours/rome.jpg' },
    { id: 4, name: 'Bali Island Retreat', location: 'Indonesia', price: '$320', image: '/assets/tours/bali.jpg' },
    { id: 5, name: 'Swiss Alps Escape', location: 'Switzerland', price: '$400', image: '/assets/tours/alps.jpg' }
  ];

  scrollLeft() {
    this.slider.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
  }

  scrollRight() {
    this.slider.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
  }

}
