import { TestRoutes } from './test.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test/test.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(TestRoutes),
  ],
  declarations: [TestComponent]
})
export class TestModule { 

    constructor() {console.log("geldi")}
}
