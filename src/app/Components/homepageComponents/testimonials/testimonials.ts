import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  imports: [CommonModule],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.css',
})
export class Testimonials implements AfterViewInit {
  @ViewChildren('avatarImage') avatarImages!: QueryList<ElementRef>;

  testimonials = [
    {
      name: 'Alina Gomez',
      location: 'New York',
      year: '2023',
      quote: 'Amazing experience! The tour was well-organized and the guides were knowledgeable. Highly recommend!',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100'
    },
    {
      name: 'Michael Chen',
      location: 'San Francisco',
      year: '2023',
      quote: 'Best travel booking experience ever. Great prices, excellent customer service, and seamless booking process.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100'
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

    this.avatarImages.forEach(img => {
      imageObserver.observe(img.nativeElement);
    });
  }
}
