import { Component } from '@angular/core';
import { ExploreHotels } from "../../Components/homepageComponets/explore-hotels/explore-hotels";
import { TopCities } from '../../Components/homepageComponets/top-cities/top-cities';
import { Map } from '../../Components/homepageComponets/map/map';
import { ExclusiveTours } from "../../Components/homepageComponets/exclusive-tours/exclusive-tours";
@Component({
  selector: 'app-homepage',
  imports: [ExploreHotels, TopCities, Map, ExclusiveTours],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css',
})
export class Homepage {

}
