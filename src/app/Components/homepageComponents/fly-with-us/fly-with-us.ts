import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-fly-with-us',
  imports: [],
  templateUrl: './fly-with-us.html',
  styleUrl: './fly-with-us.css',
})
export class FlyWithUs implements AfterViewInit {
  @ViewChild('flyImage') flyImage!: ElementRef;

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

    if (this.flyImage) {
      imageObserver.observe(this.flyImage.nativeElement);
    }
  }
}
