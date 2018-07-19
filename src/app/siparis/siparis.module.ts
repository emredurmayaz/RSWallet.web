import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SiparisRoutes } from './siparis.routing';
import { RouterModule } from '@angular/router';
import { SiparisListeComponent } from './siparis-liste/siparis-liste.component';
import { SiparisService } from './service/siparis.service';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { SiparisDetayComponent } from './siparis-detay/siparis-detay.component';
import { PickListModule } from 'primeng/picklist';
import { ButtonModule } from 'primeng/button';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(SiparisRoutes),
    TableModule,
    DialogModule,
    PickListModule,
    ButtonModule

  ],
  declarations: [SiparisListeComponent, SiparisDetayComponent],
  providers: [SiparisService]
})
export class SiparisModule { }
