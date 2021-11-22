import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DescripcionCharacterPageRoutingModule } from './descripcion-character-routing.module';

import { DescripcionCharacterPage } from './descripcion-character.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DescripcionCharacterPageRoutingModule
  ],
  declarations: [DescripcionCharacterPage]
})
export class DescripcionCharacterPageModule {}
