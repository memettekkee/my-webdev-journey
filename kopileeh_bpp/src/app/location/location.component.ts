import { Component } from '@angular/core';

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [],
  template: `
  <div class="w-full h-full bg-brown-3 p-10 flex flex-col justify-center font-montserrat">
    <div class="flex justify-center">
      <img src="assets/image/kopi-locate.png" class="w-[50%]" />
    </div>
    <div class="py-2 px-[10%] text-brown-2">
      <span class="font-bold">Lokasi Kami</span>
      Relatif berpindah pindah sesuai jam operasional
    </div>
  </div>
  `,
  styles: ``
})
export class LocationComponent {

}
