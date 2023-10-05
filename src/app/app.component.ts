import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomeComponent,
    AboutusComponent,
    RouterModule
   
  ],
  template: `
  <!-- Komponent App -->
  <main>
    
    <header class="brand-name">
      <a [routerLink]="['/']">
        <img class="brand-logo" src="/assets/logo.svg">
      </a>
    </header>
    
    <section class="content">
      <!-- Import komponentu home -->
      <!-- <app-home></app-home> -->
      <router-outlet></router-outlet>
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
