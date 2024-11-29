import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
    <footer class="h-[40px] flex justify-between items-center bg-[#9D9D9D] text-black px-10">
      <div class="">
        <p>2024 KOPI_LEEH. All rights reserved. Contact us kopileeybpn&#64;gmail.com</p>
      </div>
      <a href="https://www.instagram.com/kopileeh_bpn/?utm_source=ig_web_button_share_sheet" class="flex hover:text-white">
        Instagram Kami !
        <img class="w-7 ml-1" src="assets/image/instagram.png"/>
      </a>
    </footer>
  `,
  styles: ``
})
export class FooterComponent {

}
