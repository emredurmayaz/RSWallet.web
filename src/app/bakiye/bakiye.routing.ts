
import { Routes } from '@angular/router';
import { BakiyeListeComponent } from './bakiye-liste/bakiye-liste.component';


export const BakiyeRoutes: Routes = [{
  path: '',
  redirectTo: 'bakiye'
},
{
  path: 'bakiye',
  component: BakiyeListeComponent
}];
