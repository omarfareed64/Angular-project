import { Component ,ViewChild ,ElementRef} from '@angular/core';

@Component({
  selector: 'app-explore-hotels',
  imports: [],
  templateUrl: './explore-hotels.html',
  styleUrl: './explore-hotels.css',
})
export class ExploreHotels {
  @ViewChild('slider', { static: false }) slider!: ElementRef;

  hotels = [
    {
      id:1,
      name: 'Four Seasons Resort',
      location: 'Paris, France',
      price: '$320 / Night',
      image: '/assets/hotel1.jpg'
    },
    {
      id:2,
      name: 'Hilton Bay',
      location: 'Dubai, UAE',
      price: '$280 / Night',
      image: '/assets/hotel2.jpg'
    },
    {
      id:3,
      name: 'Grand Palace',
      location: 'Rome, Italy',
      price: '$250 / Night',
      image: '/assets/hotel3.jpg'
    },
    {
      id:4,
      name: 'Palm Island Resort',
      location: 'Maldives',
      price: '$450 / Night',
      image: '/assets/hotel4.jpg'
    },
    {
      id:5,
      name: 'The Urban Stay',
      location: 'London, UK',
      price: '$210 / Night',
      image: '/assets/hotel5.jpg'
    }
  ];

  scrollLeft() {
    this.slider.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
  }

  scrollRight() {
    this.slider.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
  }
}
