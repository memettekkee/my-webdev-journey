import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  template: `
  <!-- <app-header/> -->
    <div class="w-full h-full bg-brown-3 bg-cover1 ">
      <div class="p-20 flex justify-between">
         <div class="p-5 flex items-center">
          <div class="flex flex-col font-montserrat bg-brown-3 p-5 rounded-[2rem]">
            <p class="text-6xl text-black font-semibold mb-4">Hayyuukk !?!</p>
            <p class="text-5xl text-black font-medium">Lu Olang asik haa <br> Sini ngops dulss ki maay</p>
            <p class="text-2xl text-black mt-10">100% Gula aren pilihan Bango</p>
            <p class="text-2xl text-black ">Disajikan dengan rasa mahasiswa akhir nan UKT nunggak</p>
            <p class="text-3xl text-black font-medium mt-8">&#64;kopileeh_bpn</p>
          </div>
         </div>
          <img class="w-[30%] mr-8 rounded-[2rem]" src="assets/image/cover-bg.jpeg"/>
      </div>
    </div>
  <!-- <app-footer/> -->
  `,
  styles: ``
})
export class HomeComponent {

}
