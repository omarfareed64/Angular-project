import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-bar',
  imports: [FormsModule, CommonModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css',
})
export class SearchBar {
  searchData = {
    tripType: 'oneway',
    from: '',
    to: '',
    departureDate: '',
    returnDate: '',
    passengerClass: '2 Passenger, Business'
  };

  @Output() search = new EventEmitter<any>();

  onSearch() {
    this.search.emit(this.searchData);
  }
}
