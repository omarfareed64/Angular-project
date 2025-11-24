import { Component, AfterViewInit, ElementRef, ViewChildren, QueryList, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-choose-us',
  imports: [],
  templateUrl: './choose-us.html',
  styleUrl: './choose-us.css',
})
export class ChooseUs implements AfterViewInit {
  @ViewChildren('stackedImage') stackedImages!: QueryList<ElementRef>;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.setupLazyLoading();
    }
  }

  setupLazyLoading() {
    if (typeof IntersectionObserver === 'undefined') {
      // Fallback: load images immediately if IntersectionObserver is not available
      this.stackedImages.forEach(img => {
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

    this.stackedImages.forEach(img => {
      imageObserver.observe(img.nativeElement);
    });
  }
}
