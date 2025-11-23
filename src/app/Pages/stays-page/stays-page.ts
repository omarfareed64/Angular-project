import { Component } from '@angular/core';
import { TopCities } from "../../Components/stayspageComponets/top-cities/top-cities";
import { ExploreHotels } from "../../Components/stayspageComponets/explore-hotels/explore-hotels";
import { MapComponent } from "../../Components/stayspageComponets/map-component/map-component";
import { ExclusiveTours } from "../../Components/stayspageComponets/exclusive-tours/exclusive-tours";

@Component({
  selector: 'app-stays-page',
  imports: [TopCities, ExploreHotels, MapComponent, ExclusiveTours],
  templateUrl: './stays-page.html',
  styleUrl: './stays-page.css',
})
export class StaysPage {

}
