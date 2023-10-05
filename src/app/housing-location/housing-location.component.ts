import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Housinglocation } from '../housinglocation';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule],
  template: `
   <section class="listing">
    <img class="listing-photo" [src]="Housinglocation.photo" alt="tekst">
    <h2 class="listing-heading">{{ Housinglocation.name }}</h2>
    <p class="listing-location">{{ Housinglocation.city }}, {{ Housinglocation.state }}</p>
   </section>
  `,
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {
  @Input() Housinglocation!: Housinglocation
}
