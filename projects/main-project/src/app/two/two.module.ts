import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TwoComponent} from './two.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [TwoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: TwoComponent,
      }
    ])
  ]
})
export class TwoModule {
}
