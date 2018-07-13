import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SiparisListeComponent } from './siparis-liste/siparis-liste.component';
import { RouterModule } from '@angular/router';
import { SiparisRoutes } from './siparis.routing';
import { SiparisDetayComponent } from './siparis-detay/siparis-detay.component';
import { SiparisService } from './services/siparis.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(SiparisRoutes)
  ],
  declarations: [SiparisListeComponent, SiparisDetayComponent],
  providers: [SiparisService]
})
export class SiparisModule { }
