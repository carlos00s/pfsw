import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DescripcionLocationPageRoutingModule } from './descripcion-location-routing.module';

import { DescripcionLocationPage } from './descripcion-location.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DescripcionLocationPageRoutingModule
  ],
  declarations: [DescripcionLocationPage]
})
export class DescripcionLocationPageModule {}
