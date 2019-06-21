import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'one',
    loadChildren: './one/one.module#OneModule',
  },
  {
    path: 'two',
    loadChildren: './two/two.module#TwoModule',
  },
  {
    path: 'three',
    loadChildren: './three/three.module#ThreeModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
