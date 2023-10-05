import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomeComponent,
    AboutusComponent,
   
  ],
  template: `
  <!-- Komponent App -->
  <main>
    <header class="brand-name">
      <img class="brand-logo" src="/assets/logo.svg">
    </header>
    <section class="content">
      <!-- Import komponentu home -->
      <app-home></app-home>
      <!-- <app-aboutus></app-aboutus> -->
     <footer>
      Stopka
     </footer>
    </section> 
  </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'adrianflak';
}
