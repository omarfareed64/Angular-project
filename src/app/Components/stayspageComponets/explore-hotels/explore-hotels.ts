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
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop'
    },
    {
      id:2,
      name: 'Hilton Bay',
      location: 'Dubai, UAE',
      price: '$280 / Night',
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=300&fit=crop'
    },
    {
      id:3,
      name: 'Grand Palace',
      location: 'Rome, Italy',
      price: '$250 / Night',
      image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=300&fit=crop'
    },
    {
      id:4,
      name: 'Palm Island Resort',
      location: 'Maldives',
      price: '$450 / Night',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop'
    },
    {
      id:5,
      name: 'The Urban Stay',
      location: 'London, UK',
      price: '$210 / Night',
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&h=300&fit=crop'
    }
  ];

  scrollLeft() {
    this.slider.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
  }

  scrollRight() {
    this.slider.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
  }
}
