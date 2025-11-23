import { Component } from '@angular/core';
import { TourPackages } from '../../Components/homepageComponents/tour-packages/tour-packages';
import { ExclusiveTours } from '../../Components/stayspageComponets/exclusive-tours/exclusive-tours';
import { PopularDestinations } from '../../Components/homepageComponents/popular-destinations/popular-destinations';
import { ESim } from '../../Components/homepageComponents/e-sim/e-sim';
import { ChooseUs } from '../../Components/homepageComponents/choose-us/choose-us';
import { FlyWithUs } from '../../Components/homepageComponents/fly-with-us/fly-with-us';
import { Services } from '../../Components/homepageComponents/services/services';
import { Testimonials } from '../../Components/homepageComponents/testimonials/testimonials';
import { CharterYachts } from '../../Components/homepageComponents/charter-yachts/charter-yachts';
import { ListProperty } from '../../Components/homepageComponents/list-property/list-property';

@Component({
  selector: 'app-homepage',
  imports: [
    TourPackages,
    ExclusiveTours,
    PopularDestinations,
    ESim,
    ChooseUs,
    FlyWithUs,
    Services,
    Testimonials,
    CharterYachts,
    ListProperty
  ],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css',
})
export class Homepage {

}
