import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { Map, MapStyle, Marker, config } from '@maptiler/sdk';
import { isPlatformBrowser } from '@angular/common';

import '@maptiler/sdk/dist/maptiler-sdk.css';

interface Destination {
  name: string;
  lng: number;
  lat: number;
  zoom: number;
}

@Component({
  selector: 'app-map-component',
  imports: [],
  templateUrl: './map-component.html',
  styleUrl: './map-component.css',
})
export class MapComponent implements OnInit, AfterViewInit, OnDestroy {
  map: Map | undefined;
  markers: Marker[] = [];
  selectedDestination: string = '';
  private isBrowser: boolean = false;

  @ViewChild('map')
  private mapContainer!: ElementRef<HTMLElement>;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  destinations: Destination[] = [
    { name: 'Tokyo, Japan', lng: 139.753, lat: 35.6844, zoom: 12 },
    { name: 'Paris, France', lng: 2.3522, lat: 48.8566, zoom: 12 },
    { name: 'New York, USA', lng: -74.0060, lat: 40.7128, zoom: 12 },
    { name: 'London, UK', lng: -0.1276, lat: 51.5074, zoom: 12 },
    { name: 'Dubai, UAE', lng: 55.2708, lat: 25.2048, zoom: 12 },
    { name: 'Barcelona, Spain', lng: 2.1734, lat: 41.3851, zoom: 12 },
    { name: 'Sydney, Australia', lng: 151.2093, lat: -33.8688, zoom: 12 },
    { name: 'Rome, Italy', lng: 12.4964, lat: 41.9028, zoom: 12 }
  ];

  ngOnInit(): void {
    if (!this.isBrowser) return;

    config.apiKey = 'BLphNzBZFTTofo0JmKVZ';
  }

  ngAfterViewInit() {
    if (!this.isBrowser) return;

    const initialState = { lng: 139.753, lat: 35.6844, zoom: 12 };

    this.map = new Map({
      container: this.mapContainer.nativeElement,
      style: 'https://api.maptiler.com/maps/streets-v2/style.json?key=BLphNzBZFTTofo0JmKVZ',
      center: [initialState.lng, initialState.lat],
      zoom: initialState.zoom
    });

    // Wait for map to load before adding markers
    this.map.on('load', () => {
      this.addMarkersForAllDestinations();
    });
  }

  addMarkersForAllDestinations() {
    if (!this.map) return;

    // Clear existing markers
    this.markers.forEach(marker => marker.remove());
    this.markers = [];

    // Add markers for all destinations
    this.destinations.forEach(dest => {
      const marker = new Marker({ color: '#00C4CC' })
        .setLngLat([dest.lng, dest.lat])
        .addTo(this.map!);
      this.markers.push(marker);
    });
  }

  goToDestination(destination: Destination) {
    if (!this.map) return;

    this.selectedDestination = destination.name;

    // Animate map to destination
    this.map.flyTo({
      center: [destination.lng, destination.lat],
      zoom: destination.zoom,
      duration: 1500
    });
  }

  ngOnDestroy() {
    this.markers.forEach(marker => marker.remove());
    this.map?.remove();
  }
}
