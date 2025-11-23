import { Component, AfterViewInit, ElementRef, ViewChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-choose-us',
  imports: [],
  templateUrl: './choose-us.html',
  styleUrl: './choose-us.css',
})
export class ChooseUs implements AfterViewInit {
  @ViewChildren('stackedImage') stackedImages!: QueryList<ElementRef>;

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

    this.stackedImages.forEach(img => {
      imageObserver.observe(img.nativeElement);
    });
  }
}
