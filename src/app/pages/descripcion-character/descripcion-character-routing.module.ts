import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DescripcionCharacterPage } from './descripcion-character.page';

const routes: Routes = [
  {
    path: '',
    component: DescripcionCharacterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DescripcionCharacterPageRoutingModule {}
