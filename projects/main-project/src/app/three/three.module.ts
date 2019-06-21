import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ThreeComponent} from './three.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [ThreeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ThreeComponent
      }
    ])
  ]
})
export class ThreeModule {
}
