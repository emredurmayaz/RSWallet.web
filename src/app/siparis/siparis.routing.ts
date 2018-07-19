import { Routes } from '@angular/router';
import { SiparisListeComponent } from './siparis-liste/siparis-liste.component';
import { SiparisDetayComponent } from './siparis-detay/siparis-detay.component';


export const SiparisRoutes: Routes = [{
    path: '',
    redirectTo: 'SiparisVer'
},
{
    path: '',
    component: SiparisListeComponent
},
{
    path: 'SiparisVer',
    component: SiparisDetayComponent
}];
