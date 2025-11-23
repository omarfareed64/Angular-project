import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-charter-yachts',
  imports: [],
  templateUrl: './charter-yachts.html',
  styleUrl: './charter-yachts.css',
})
export class CharterYachts implements AfterViewInit {
  @ViewChild('charterBg') charterBg!: ElementRef;

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
      rootMargin: '100px'
    });

    if (this.charterBg) {
      imageObserver.observe(this.charterBg.nativeElement);
    }
  }
}
