import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DescripcionLocationPage } from './descripcion-location.page';

const routes: Routes = [
  {
    path: '',
    component: DescripcionLocationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DescripcionLocationPageRoutingModule {}
