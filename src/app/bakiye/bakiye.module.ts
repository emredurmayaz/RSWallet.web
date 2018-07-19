import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BakiyeRoutes } from './bakiye.routing';
import { RouterModule } from '@angular/router';
import { BakiyeListeComponent } from './bakiye-liste/bakiye-liste.component';
import { BakiyeService } from './services/bakiye.service';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(BakiyeRoutes),
    TableModule,
    DialogModule

  ],
  declarations: [BakiyeListeComponent],
  providers: [BakiyeService]
})
export class BakiyeModule { }
