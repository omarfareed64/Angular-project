import { Component } from '@angular/core';
import { TourPackages } from '../../Components/tourpageComponents/tour-packages/tour-packages';
import { ExclusiveTours } from '../../Components/stayspageComponets/exclusive-tours/exclusive-tours';
import { PopularDestinations } from '../../Components/tourpageComponents/popular-destinations/popular-destinations';
import { ESim } from '../../Components/tourpageComponents/e-sim/e-sim';
import { ChooseUs } from '../../Components/tourpageComponents/choose-us/choose-us';
import { FlyWithUs } from '../../Components/tourpageComponents/fly-with-us/fly-with-us';
import { Services } from '../../Components/tourpageComponents/services/services';
import { Testimonials } from '../../Components/tourpageComponents/testimonials/testimonials';
import { CharterYachts } from '../../Components/tourpageComponents/charter-yachts/charter-yachts';
import { ListProperty } from '../../Components/tourpageComponents/list-property/list-property';

@Component({
  selector: 'app-tours-page',
  imports: [TourPackages, ExclusiveTours, PopularDestinations, ESim, ChooseUs, FlyWithUs, Services, Testimonials, CharterYachts, ListProperty],
  templateUrl: './tours-page.html',
  styleUrl: './tours-page.css',
})
export class ToursPage {

}
