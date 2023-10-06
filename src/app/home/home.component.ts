import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { Housinglocation } from '../housinglocation';
import { HousingService } from '../housing.service';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HousingLocationComponent
  ],
  template: `
  <!-- Komponent home -->
    <section> 
      <form>
        <input type="text" #filter>
        <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location *ngFor="let Housinglocation of filteredLocationList" [HousinglocationList]="Housinglocation"></app-housing-location>
    </section>
    <section class="listing-products"></section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

 housingLocationList: Housinglocation[] = [];
 housingService: HousingService = inject(HousingService);
 filteredLocationList: Housinglocation[] = []

 constructor() {
  this.housingService.getAllHousingLocations().then((housingLocationList: Housinglocation[]) => {
    this.housingLocationList = housingLocationList;
    this.filteredLocationList = housingLocationList;
  })

  // this.housingLocationList = this.housingService.getAllHousingLocation();
  // this.filteredLocationList = this.housingLocationList;
 }

 filterResults(text:string) {
  if(!text) {
    this.filteredLocationList = this.housingLocationList;
  }
    this.filteredLocationList = this.housingLocationList.filter(
      HousingLocation => HousingLocation?.city.toLowerCase().includes(text.toLowerCase())
    )
  };
}
