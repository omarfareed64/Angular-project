import { Component, signal } from '@angular/core';
import { SearchBar } from "../../Components/flightsPageComponents/search-bar/search-bar";
import { FlightsFilters } from "../../Components/flightsPageComponents/flights-filters/flights-filters";
import { FlightsList } from "../../Components/flightsPageComponents/flights-list/flights-list";
import { Pagination } from "../../Components/flightsPageComponents/pagination/pagination";

@Component({
  selector: 'app-flights-page',
  imports: [SearchBar, FlightsFilters, FlightsList, Pagination],
  templateUrl: './flights-page.html',
  styleUrl: './flights-page.css',
})
export class FlightsPage {
  totalFlights = signal(580);
}
