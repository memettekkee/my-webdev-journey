import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, HeaderComponent, FooterComponent],
  template: `

  <app-header/>

    <!-- <app-home/> -->

    <!-- Routes -->
    <router-outlet />

    <app-footer/>

  `,
  styles: [],
})
export class AppComponent {
  title = 'angular-site';
}
