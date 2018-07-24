import { Routes } from '@angular/router';
import { ProfilimComponent } from './profilim.component';

export const ProfilimRoutes: Routes = [{
    path: '',
    redirectTo: 'profilim'
},
{
    path: 'profilim',
    component: ProfilimComponent
}];
