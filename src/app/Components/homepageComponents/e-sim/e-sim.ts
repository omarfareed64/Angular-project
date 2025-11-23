import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-e-sim',
  imports: [],
  templateUrl: './e-sim.html',
  styleUrl: './e-sim.css',
})
export class ESim implements AfterViewInit {
  @ViewChild('esimImage') esimImage!: ElementRef;

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

    if (this.esimImage) {
      imageObserver.observe(this.esimImage.nativeElement);
    }
  }
}
