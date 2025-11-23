import { Component, AfterViewInit, ElementRef, ViewChild, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-tour-packages',
  imports: [],
  templateUrl: './tour-packages.html',
  styleUrl: './tour-packages.css',
})
export class TourPackages implements AfterViewInit {
  @ViewChildren('tourImage') tourImages!: QueryList<ElementRef>;

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

    this.tourImages.forEach(img => {
      imageObserver.observe(img.nativeElement);
    });
  }
}
