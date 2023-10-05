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
        <input type="text">
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location *ngFor="let Housinglocation of housingLocationList" [HousinglocationList]="Housinglocation"></app-housing-location>
    </section>
    <section class="listing-products"></section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

 housingLocationList: Housinglocation[] = [];
 housingService: HousingService = inject(HousingService);

 constructor() {
  this.housingLocationList = this.housingService.getAllHousingLocation();
 }
  
}
