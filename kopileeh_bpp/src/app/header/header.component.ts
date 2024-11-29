import { Component } from '@angular/core';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: `
  <div class="bg-brown-2 h-3 "></div>
    <div class="navbar bg-brown-1 p-3 sticky top-0">
      <div class="navbar-brand pl-16 pr-24">
        <a class="">
          <img class="h-16 " src="assets/image/logo_kopi.png">
        </a>
      </div>
      <div class="navbar-menu font-anton flex gap-10 tracking-widest">
        <a href="/" class="navbar-item text-2xl  text-brown-2 hover:bg-brown-1 hover:text-white ">
          Home
        </a>
        <a href="/menu" class="navbar-item text-2xl  text-brown-2 hover:bg-brown-1 hover:text-white " >
          Menu
        </a>
        <a href="/location" class="navbar-item text-2xl  text-brown-2 hover:bg-brown-1 hover:text-white ">
          Lokasi Kami 
        </a>
      </div>
    </div>
  `,
  styles: ``
})
export class HeaderComponent {
}
