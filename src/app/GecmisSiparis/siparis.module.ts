import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiparisComponent } from './test/siparis.component';
import { RouterModule } from '@angular/router';
import { TabMenuModule } from 'primeng/tabmenu';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TestService } from './service/test.service';
import { TestDetailComponent } from './test/detail/test-detail.component';
import { FormsModule } from '@angular/forms';
import { TestRoutes } from './siparis.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(TestRoutes),
    TabMenuModule,
    ButtonModule,
    TableModule,
    FormsModule
  ],
  declarations: [
    SiparisComponent,
    TestDetailComponent],
  providers: [TestService]
})
export class SiparisModule {

  constructor() { }
}
