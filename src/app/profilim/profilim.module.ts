import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilimComponent } from './profilim.component';
import { RouterModule } from '@angular/router';
import { ProfilimRoutes } from './profilim.routing';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ProfilimRoutes),
    FormsModule
  ],
  declarations: [ProfilimComponent]
})
export class ProfilimModule { }
