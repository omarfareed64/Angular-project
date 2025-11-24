import { Component, AfterViewInit, ElementRef, ViewChild, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-charter-yachts',
  imports: [],
  templateUrl: './charter-yachts.html',
  styleUrl: './charter-yachts.css',
})
export class CharterYachts implements AfterViewInit {
  @ViewChild('charterBg') charterBg!: ElementRef;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.setupLazyLoading();
    }
  }

  setupLazyLoading() {
    if (typeof IntersectionObserver === 'undefined') {
      // Fallback: load images immediately if IntersectionObserver is not available
      if (this.charterBg) {
        const element = this.charterBg.nativeElement as HTMLElement;
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
      rootMargin: '100px'
    });

    if (this.charterBg) {
      imageObserver.observe(this.charterBg.nativeElement);
    }
  }
}
