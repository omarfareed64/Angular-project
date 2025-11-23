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
    { id: 1, name: 'Santorini Sunset Cruise', location: 'Greece', price: '$250', image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=400&h=500&fit=crop' },
    { id: 2, name: 'Desert Safari Adventure', location: 'Dubai, UAE', price: '$180', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=500&fit=crop' },
    { id: 3, name: 'Rome Ancient Wonders', location: 'Italy', price: '$200', image: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=400&h=500&fit=crop' },
    { id: 4, name: 'Bali Island Retreat', location: 'Indonesia', price: '$320', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=500&fit=crop' },
    { id: 5, name: 'Swiss Alps Escape', location: 'Switzerland', price: '$400', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=500&fit=crop' }
  ];

  scrollLeft() {
    this.slider.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
  }

  scrollRight() {
    this.slider.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
  }

}
