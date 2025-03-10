import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LibroComponent } from './pages/libro/libro.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { ViajeComponent } from './pages/viaje/viaje.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'libros',
        component: LibroComponent
    },
    {
        path: 'productos',
        component: ProductoComponent
    },
    {
        path: 'viajes',
        component: ViajeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
