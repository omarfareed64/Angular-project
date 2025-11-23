import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-popular-destinations',
  imports: [CommonModule],
  templateUrl: './popular-destinations.html',
  styleUrl: './popular-destinations.css',
})
export class PopularDestinations implements AfterViewInit {
  @ViewChildren('destinationImage') destinationImages!: QueryList<ElementRef>;

  popularDestinations = [
    {
      name: 'Tokyo, Japan',
      description: 'Experience the perfect blend of traditional culture and modern innovation in the heart of Japan.',
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400'
    },
    {
      name: 'Bangkok, Thailand',
      description: 'Discover vibrant street markets, ancient temples, and delicious cuisine in this bustling metropolis.',
      image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=400'
    },
    {
      name: 'London, UK',
      description: 'Explore historic landmarks, world-class museums, and charming neighborhoods in this iconic city.',
      image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400'
    },
    {
      name: 'Paris, France',
      description: 'The City of Light offers romance, art, and culinary excellence around every corner.',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400'
    },
    {
      name: 'New York, USA',
      description: 'The city that never sleeps - experience Broadway, world-famous landmarks, and diverse culture.',
      image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400'
    }
  ];

  ngAfterViewInit() {
    this.setupLazyLoading();
  }

  setupLazyLoading() {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          const imageUrl = element.getAttribute('data-src');
          if (imageUrl) {
            element.style.backgroundImage = `url(${imageUrl})`;
            element.removeAttribute('data-src');
            observer.unobserve(element);
          }
        }
      });
    }, {
      rootMargin: '50px'
    });

    this.destinationImages.forEach(img => {
      imageObserver.observe(img.nativeElement);
    });
  }
}
