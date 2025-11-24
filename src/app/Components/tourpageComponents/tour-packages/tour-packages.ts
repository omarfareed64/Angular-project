import { Component, AfterViewInit, ElementRef, ViewChild, QueryList, ViewChildren, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-tour-packages',
  imports: [],
  templateUrl: './tour-packages.html',
  styleUrl: './tour-packages.css',
})
export class TourPackages implements AfterViewInit {
  @ViewChildren('tourImage') tourImages!: QueryList<ElementRef>;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.setupLazyLoading();
    }
  }

  setupLazyLoading() {
    if (typeof IntersectionObserver === 'undefined') {
      // Fallback: load images immediately if IntersectionObserver is not available
      this.tourImages.forEach(img => {
        const element = img.nativeElement as HTMLElement;
        const imageUrl = element.getAttribute('data-src');
        if (imageUrl) {
          element.style.backgroundImage = `url(${imageUrl})`;
          element.removeAttribute('data-src');
        }
      });
      return;
    }

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

    this.tourImages.forEach(img => {
      imageObserver.observe(img.nativeElement);
    });
  }
}
