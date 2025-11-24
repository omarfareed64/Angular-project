import { Component, AfterViewInit, ElementRef, ViewChild, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services implements AfterViewInit {
  @ViewChild('servicesImage') servicesImage!: ElementRef;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.setupLazyLoading();
    }
  }

  setupLazyLoading() {
    if (typeof IntersectionObserver === 'undefined') {
      // Fallback: load images immediately if IntersectionObserver is not available
      if (this.servicesImage) {
        const element = this.servicesImage.nativeElement as HTMLElement;
        const imageUrl = element.getAttribute('data-src');
        if (imageUrl) {
          element.style.backgroundImage = `url(${imageUrl})`;
          element.removeAttribute('data-src');
        }
      }
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

    if (this.servicesImage) {
      imageObserver.observe(this.servicesImage.nativeElement);
    }
  }
}
