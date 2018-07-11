import { TestComponent } from './test/test.component';
import { Routes } from '@angular/router';


export const TestRoutes: Routes = [{
  path: '',
  redirectTo: 'home'
},
{
  path: 'home',
  component: TestComponent
}];
