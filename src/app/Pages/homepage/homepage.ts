import { Component } from '@angular/core';
import { ExploreHotels } from "../../Components/homepageComponets/explore-hotels/explore-hotels";
import { TopCities } from '../../Components/homepageComponets/top-cities/top-cities';
import { ExclusiveTours } from "../../Components/homepageComponets/exclusive-tours/exclusive-tours";
import { MapComponent } from '../../Components/homepageComponets/map-component/map-component';
@Component({
  selector: 'app-homepage',
  imports: [ExploreHotels, TopCities,MapComponent, ExclusiveTours],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css',
})
export class Homepage {

}
