import { SiparisComponent } from './test/siparis.component';
import { Routes } from '@angular/router';


export const TestRoutes: Routes = [{
  path: '',
  redirectTo: 'home'
},
{
  path: 'home',
  component: SiparisComponent

}];
