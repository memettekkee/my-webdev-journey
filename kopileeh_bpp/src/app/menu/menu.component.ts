import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  template: `
    <div class="w-full h-full p-10 bg-brown-3 font-montserrat flex flex-col justify-center text-brown-2">
      <div class="font-normal flex justify-center text-2xl p-5">
        <p>Sebar Rasa Kopi dengan teman-teman sekitar</p>
      </div>
      <div class="px-10 pt-6 grid grid-cols-4 gap-7">
        <div class="flex flex-col justify-center">
          <img class="w-50" src="assets/image/coffe/menu-1.png"/>
          <div class="flex justify-center py-5">
            <p>Butterscotch</p>
          </div>
        </div>
        <div class="flex flex-col justify-center">
          <img class="w-50" src="assets/image/coffe/menu-1.png"/>
          <div class="flex justify-center py-5">
            <p>Butterscotch</p>
          </div>
        </div>
        <div class="flex flex-col justify-center">
          <img class="w-50" src="assets/image/coffe/menu-1.png"/>
          <div class="flex justify-center py-5">
            <p>Butterscotch</p>
          </div>
        </div>
        <div class="flex flex-col justify-center">
          <img class="w-50" src="assets/image/coffe/menu-1.png"/>
          <div class="flex justify-center py-5">
            <p>Butterscotch</p>
          </div>
        </div>
        <div class="flex flex-col justify-center">
          <img class="w-50" src="assets/image/coffe/menu-1.png"/>
          <div class="flex justify-center py-5">
            <p>Butterscotch</p>
          </div>
        </div>
        <div class="flex flex-col justify-center">
          <img class="w-50" src="assets/image/coffe/menu-1.png"/>
          <div class="flex justify-center py-5">
            <p>Butterscotch</p>
          </div>
        </div>5
      </div>
    </div>
  `,
  styles: ``
})
export class MenuComponent {

}
