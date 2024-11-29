import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { LocationComponent } from './location/location.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'menu',
        component: MenuComponent
    },
    {
        path: 'location',
        component: LocationComponent
    }
];
